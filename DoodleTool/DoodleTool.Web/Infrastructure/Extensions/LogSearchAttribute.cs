namespace DoodleTool.Web.Infrastructure.Extensions
{
    using Data;
    using Data.Models;
    using DoodleTool.Web.ViewModels;
    using Microsoft.AspNetCore.Mvc.Filters;
    using Microsoft.Extensions.DependencyInjection;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Threading.Tasks;

    public class LogSearchAttribute : ActionFilterAttribute
    {
        private const string Path = "logs.txt"; // by default creates logs.txt file in the root directory which is Doodle.Web

        private DateTime SpecificDate { get; set; } = new DateTime(DateTime.UtcNow.Year, DateTime.UtcNow.Month, DateTime.UtcNow.Day, 03, 0, 0, 0); // 03 o'clock in the morning

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            Task.Run(async () =>
            {
                if (!context.ModelState.IsValid)
                {
                    return;
                }

                var date = DateTime.UtcNow;
                var ipAddress = context.HttpContext.Connection.RemoteIpAddress.ToString();
                var username = context.HttpContext.User.Identity.Name ?? "non logged in user";

                var model = context.ActionArguments["model"] as SearchFormViewModel;
                if (model == null)
                {
                    return;
                }

                var searchText = model.SearchText;

                if (string.IsNullOrEmpty(searchText))
                {
                    return;
                }

                // every new data is added as a new line on the logs.txt
                var saveInformationAsString = $"{date}-{ipAddress}-{username}-{searchText}-";

                // save the information into the logs.txt or if there isn't such file because we delete it every day it will create new itself.
                using (var writer = new StreamWriter(Path, true))
                {
                    await writer.WriteLineAsync(saveInformationAsString);
                }

                // compare the current date with 03 o'clock in the morning. If its greater or equal goes down and adds one day to the SpecificDate so the date will become TOMORROW (the goal is to save the gather data once a day). Then executes query which saves the saved information from logs.txt in to the database. After that deletes the logs.txt simply because we have taken all the data from it.
                if (date >= this.SpecificDate)
                {
                    this.SpecificDate = this.SpecificDate.AddDays(1);
                    await SaveDataToDb(context);
                    File.Delete(Path);
                }
            })
            .GetAwaiter()
            .GetResult();

            // default method
            base.OnActionExecuting(context);
        }

        public async Task SaveDataToDb(ActionExecutingContext context)
        {
            var list = new List<string>();

            if (!File.Exists(Path))
            {
                return;
            }

            // read the stored information line by line and adds it to the list
            using (var reader = new StreamReader(Path))
            {
                while (!reader.EndOfStream)
                {
                    var lineFromDocument = await reader.ReadLineAsync();
                    list.Add(lineFromDocument);
                }
            }

            if (list.Count == 0)
            {
                return;
            }

            // gets the DoodleTool current database (in this case using Entity framework).
            var db = context
                .HttpContext
                .RequestServices
                .GetService<ApplicationDbContext>();

            // gets and splits the data in order to insert it to the database in the correctly format
            foreach (var line in list)
            {
                var data = line.Split(new char[] { '-' }, StringSplitOptions.RemoveEmptyEntries);
                var date = DateTime.Parse(data[0]);
                var ipAddress = data[1];
                var username = data[2];
                var searchText = data[3];

                var logSearchOperations = new LogSearchingOperation
                {
                    Date = date,
                    IpAddress = ipAddress,
                    Username = username,
                    SearchText = searchText
                };

                db.LogSearchingOperations.Add(logSearchOperations);
            }

            await db.SaveChangesAsync();
        }
    }
}

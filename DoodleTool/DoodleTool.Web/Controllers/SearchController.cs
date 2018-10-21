namespace DoodleTool.Web.Controllers
{
    using Infrastructure.Extensions;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using ViewModels;

    [AllowAnonymous]
    public class SearchController : BaseController
    {
        [HttpPost]
        [Route("search-query")]
        [LogSearch]
        public async Task<IActionResult> SearchQuery([FromBody] SearchFormViewModel model)
        {
            // logic for search, depends of the use case
            // for example general search or search in users only (see the SearchFormViewModel has EnableSearchInUsers)
            return this.Ok();
        }
    }
}

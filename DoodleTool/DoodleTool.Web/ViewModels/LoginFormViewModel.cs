namespace DoodleTool.Web.ViewModels
{
    using System.ComponentModel.DataAnnotations;

    public class LoginFormViewModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}

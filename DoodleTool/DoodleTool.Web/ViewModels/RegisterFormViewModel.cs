namespace DoodleTool.Web.ViewModels
{
    using System.ComponentModel.DataAnnotations;

    public class RegisterFormViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Compare(nameof(Password))]
        public string PasswordConfirmation { get; set; }
    }
}

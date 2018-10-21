namespace DoodleTool.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class LogSearchingOperation
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        [Required]
        [MaxLength(100)]
        public string IpAddress { get; set; }

        [Required]
        [MaxLength(100)]
        public string SearchText { get; set; }

        [MaxLength(100)]
        public string Username { get; set; }
    }
}

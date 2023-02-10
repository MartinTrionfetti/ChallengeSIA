using ChallengeSIA.Models;

namespace ChallengeSIA.Dtos
{
    public class CategoryResponseDto
    {
        public Category Category { get; set; }
        public bool IsSuccess { get; set; }
        public string Errors { get; set; }
    }
}
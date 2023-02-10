using ChallengeSIA.Models;

namespace ChallengeSIA.Dtos
{
    public class ProductResponseDto
    {
        public Product Product { get; set; }
        public bool IsSuccess { get; set; }
        public string Errors { get; set; }
    }
}
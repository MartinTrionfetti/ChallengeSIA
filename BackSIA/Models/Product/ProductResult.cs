namespace ChallengeSIA.Models
{
    public class ProductResult
    {
        public Product Product { get; set; }
        public string Errors { get; set; }
        public bool IsSuccess { get; set; }
    }
}
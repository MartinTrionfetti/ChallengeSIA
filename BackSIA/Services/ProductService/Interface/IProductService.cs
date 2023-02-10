using ChallengeSIA.Models;
using System.Collections.Generic;

namespace ChallengeSIA.Services
{
    public interface IProductService
    {
        Product Get(int id);
        List<Product> GetAll();
        ProductResult Create(Product product);
        ProductResult Update(Product product);
        bool Delete(int id);
    }
}
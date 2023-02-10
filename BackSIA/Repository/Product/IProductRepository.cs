using ChallengeSIA.Models;
using System.Collections.Generic;

namespace ChallengeSIA.Services
{
    public interface IProductRepository
    {
        Product Get(int id);
        List<Product> GetAll();
        Product Create(Product product);
        Product Update(Product product);
        bool Delete(int id);
    }
}
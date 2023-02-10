using ChallengeSIA.Models;
using System.Collections.Generic;

namespace ChallengeSIA.Services
{
    public interface ICategoryService
    {
        Category Get(int id);
        List<Category> GetAll();
        CategoryResult Create(Category category);
        CategoryResult Update(Category category);
        bool Delete(int id);
    }
}
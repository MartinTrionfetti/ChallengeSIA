using ChallengeSIA.Models;
using System.Collections.Generic;

namespace ChallengeSIA.Services
{
    public interface ICategoryRepository
    {
        Category Get(int id);
        List<Category> GetAll();
        Category Create(Category category);
        Category Update(Category category);
        bool Delete(int id);
    }
}
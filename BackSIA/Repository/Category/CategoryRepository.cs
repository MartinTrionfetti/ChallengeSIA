using ChallengeSIA.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace ChallengeSIA.Services
{
    public class CategoryRepository : ICategoryRepository 
    {
        AppContext AppContext;

        public CategoryRepository()
        {
            AppContext = new AppContext();
        }

        public Category Get(int id)
        {
            return AppContext.Categories.First(x => x.CategoryId == id);
        }
       
        public List<Category> GetAll()
        {
            return AppContext.Categories.ToList();
        }

        public Category Create(Category category)
        {
            try
            {
                AppContext.Categories.Add(category);
                AppContext.SaveChanges();
                return category;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public Category Update(Category category)
        {
            try
            {
                var categoryDb = AppContext.Categories.First(x => x.CategoryId == category.CategoryId);

                if (categoryDb != null)
                {
                    categoryDb.Name = category.Name;
                    AppContext.SaveChanges();
                    return categoryDb;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public bool Delete(int id)
        {
            var categoryDb = AppContext.Categories.First(x => x.CategoryId == id);
            if (categoryDb != null)
            {
                AppContext.Categories.Remove(categoryDb);
                AppContext.SaveChanges();
                return true;
            }
            return false;
        }

    }
}
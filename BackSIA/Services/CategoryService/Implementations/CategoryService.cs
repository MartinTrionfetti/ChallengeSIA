using ChallengeSIA.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ChallengeSIA.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            this.categoryRepository = categoryRepository;
        }

        public Category Get(int id)
        {
            return categoryRepository.Get(id);
        }

        public List<Category> GetAll()
        {
            return categoryRepository.GetAll();
        }

        public CategoryResult Create(Category category)
        {
            try
            {
                CategoryResult categoryResult = new CategoryResult();
                //Valido si el producto ya existe
                if (Exist(category))
                {
                    categoryResult.Errors = "La categoría ya existe";
                }
                else
                {
                    categoryResult.Category = categoryRepository.Create(category);
                }

                categoryResult.IsSuccess = categoryResult.Category != null;
                return categoryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            
        }

        public CategoryResult Update(Category category)
        {
            try
            {
                CategoryResult categoryResult = new CategoryResult();

                //Valido si la categoría ya existe
                if (Exist(category))
                {
                    categoryResult.Errors = "La categoría ya existe";
                }
                else
                {
                    categoryResult.Category = categoryRepository.Update(category);
                }

                categoryResult.IsSuccess = categoryResult.Category != null;
                return categoryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public bool Delete(int id)
        {
            try
            {
                CategoryResult categoryResult = new CategoryResult();
                return categoryRepository.Delete(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public bool Exist(Category category)
        {
            return categoryRepository.GetAll().Where(x => x.Name == category.Name).Count() != 0;
        }

    }
}
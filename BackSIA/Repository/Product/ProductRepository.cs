using ChallengeSIA.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace ChallengeSIA.Services
{
    public class ProductRepository: IProductRepository {

        AppContext AppContext;

        public ProductRepository()
        {
            AppContext = new AppContext();
        }

        public Product Get(int id)
        {
            return AppContext.Products.First(X => X.ProductId == id);
        }

        public List<Product> GetAll()
        {
            return AppContext.Products.ToList();
        }

        public Product Create(Product product)
        {
            try
            {
                AppContext.Products.Add(product);
                AppContext.SaveChanges();
                return product;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            
        }

        public Product Update(Product product)
        {
            try
            {
                var productDb = AppContext.Products.First(x => x.ProductId == product.ProductId);
                
                if(productDb != null)
                {
                    productDb.Name = product.Name;
                    productDb.Image = product.Image;
                    productDb.Description = product.Description;
                    AppContext.SaveChanges();
                    return productDb;
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
            var productDb = AppContext.Products.First(x => x.ProductId == id);
            if(productDb != null)
            {
                AppContext.Products.Remove(productDb);
                AppContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
using ChallengeSIA.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ChallengeSIA.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository productRepository;

        public ProductService(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        public Product Get(int id)
        {
            return productRepository.Get(id);
        }

        public List<Product> GetAll()
        {
            return productRepository.GetAll();
        }

        public ProductResult Create(Product product)
        {
            try
            {
                ProductResult productResult = new ProductResult();
                //Valido si el producto ya existe
                if (Exist(product))
                {
                    productResult.Errors = "El producto ya existe.";
                }
                else
                {
                    productResult.Product = productRepository.Create(product);
                }
                
                productResult.IsSuccess = productResult.Product != null;
                return productResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            
        }

        public ProductResult Update(Product product)
        {
            try
            {
                ProductResult productResult = new ProductResult();

                //Valido si el producto ya existe
                if (Exist(product))
                {
                    productResult.Errors = "El producto ya existe.";
                }
                else
                {
                    productResult.Product = productRepository.Update(product);
                }

                productResult.IsSuccess = productResult.Product != null;
                return productResult;
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
                ProductResult productResult = new ProductResult();
                return productRepository.Delete(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public bool Exist(Product product)
        {
            return productRepository.GetAll().Where(x => x.Name == product.Name).Count() != 0;
        }

    }
}
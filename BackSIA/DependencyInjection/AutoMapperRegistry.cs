using AutoMapper;
using ChallengeSIA.Dtos;
using ChallengeSIA.Models;
using StructureMap;

namespace WebApi.DependencyInjection
{
    /// <summary>
    /// Registry for dependency injection configuration of AutoMapper.
    /// </summary>
    internal partial class AutoMapperRegistry : Registry
    {
        public AutoMapperRegistry()
        {
            // NOTE: In a production application, it would probably
            // be better to put some time into making this convention-based.
            // But for this simple demonstration, I opted to skip this step.
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Product, ProductCreateRequestDto>();
                cfg.CreateMap<ProductCreateRequestDto, Product>();

                cfg.CreateMap<Category, CategoryCreateRequestDto>();
                cfg.CreateMap<CategoryCreateRequestDto, Category>();
            });


            IMapper mapper = config.CreateMapper();

            this.For<IMapper>().Use(mapper);
        }
    }
}
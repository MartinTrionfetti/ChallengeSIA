using ChallengeSIA.Services;
using StructureMap;

namespace WebApi.DependencyInjection
{
    internal partial class AutoMapperRegistry
    {
        internal class BusinessLayerRegistry : Registry
        {
            public BusinessLayerRegistry()
            {
                this.Scan(x =>
                {
                    x.AssemblyContainingType<ICategoryService>();
                    x.WithDefaultConventions();
                    x.AddAllTypesOf<ICategoryService>();
                });

                this.Scan(x =>
                {
                    x.AssemblyContainingType<IProductService>();
                    x.WithDefaultConventions();
                    x.AddAllTypesOf<IProductService>();
                });

                this.Scan(x =>
                {
                    x.AssemblyContainingType<IProductRepository>();
                    x.WithDefaultConventions();
                    x.AddAllTypesOf<IProductRepository>();
                });

                this.Scan(x =>
                {
                    x.AssemblyContainingType<ICategoryRepository>();
                    x.WithDefaultConventions();
                    x.AddAllTypesOf<ICategoryRepository>();
                });
            }
        }
    }
}
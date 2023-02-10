using StructureMap;

namespace WebApi.DependencyInjection
{
    internal partial class AutoMapperRegistry
    {
        internal static class IoC
        {
            public static IContainer Container { get; private set; }

            public static IContainer Register()
            {
                Container = new Container(c =>
                {
                    c.AddRegistry<AutoMapperRegistry>();
                    c.AddRegistry<BusinessLayerRegistry>();
                });

                return Container;
            }
        }
    }
}
using Microsoft.Web.Http.Routing;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Routing;
using static ChallengeSIA.AutoMapperRegistry;

namespace ChallengeSIA
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Add converter to serialize enum types as their symbol name rather than their value
            config.Formatters.JsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
                      

            // Dependency Injection for WebApi controllers via StructureMap
            config.Services.Replace(typeof(System.Web.Http.Dispatcher.IHttpControllerActivator), new ServiceActivator(config));

            // API Versioning (adding version to URL)
            config.AddApiVersioning();

            // make a constraint for API version
            var constraintResolver = new DefaultInlineConstraintResolver()
            {
                ConstraintMap =
                {
                    ["apiVersion"] = typeof( ApiVersionRouteConstraint )
                }
            };

            // Web API routes
            config.MapHttpAttributeRoutes(constraintResolver);

            // Add JSON support for output (instead of XML) when text/html is requested
            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");

            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);

            var corsAttr = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(corsAttr);

            // Configuración y servicios de Web API

            // Rutas de Web API
            //config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}

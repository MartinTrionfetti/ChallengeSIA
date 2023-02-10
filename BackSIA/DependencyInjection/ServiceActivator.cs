using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Dispatcher;
using System.Web.Http;
using System;
using static WebApi.DependencyInjection.AutoMapperRegistry;

namespace ChallengeSIA
{
    internal partial class AutoMapperRegistry
    {
        internal class ServiceActivator : IHttpControllerActivator
        {
            public ServiceActivator(HttpConfiguration configuration) { }

            public IHttpController Create(HttpRequestMessage request, HttpControllerDescriptor controllerDescriptor, Type controllerType)
            {
                var controller = IoC.Container.GetInstance(controllerType) as IHttpController;
                return controller;
            }
        }
    }
}
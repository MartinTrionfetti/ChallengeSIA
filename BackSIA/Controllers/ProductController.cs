using AutoMapper;
using ChallengeSIA.Dtos;
using ChallengeSIA.Models;
using ChallengeSIA.Services;
using Microsoft.Web.Http;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ChallengeSIA.Controllers
{
    [ApiVersion("1")]
    public class ProductController : ApiController
    {

        private readonly IMapper mapper;

        private readonly IProductService productService;

        public ProductController(IMapper mapper,IProductService productService)
        {
            this.mapper = mapper;
            this.productService = productService;
        }

        public ProductController()
        {

        }

        [HttpGet]
        [Route("api/v{version:apiVersion}/product/{id}")]
        public HttpResponseMessage Get(int id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, productService.Get(id));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpGet]
        [Route("api/v{version:apiVersion}/product")]
        public HttpResponseMessage GetAll()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, productService.GetAll());
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpPost]
        [Route("api/v{version:apiVersion}/product")]
        public HttpResponseMessage Create(ProductCreateRequestDto productCreateRequestDto)
        {
            try
            {
                var product = mapper.Map<Product>(productCreateRequestDto);

                return Request.CreateResponse(HttpStatusCode.OK, productService.Create(product));
                
            }
            catch (Exception ex)
            {

                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpPut]
        [Route("api/v{version:apiVersion}/product")]
        public HttpResponseMessage Update(ProductCreateRequestDto productCreateRequestDto)
        {
            try
            {
                var product = mapper.Map<Product>(productCreateRequestDto);

                return Request.CreateResponse(HttpStatusCode.OK, productService.Update(product));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpDelete]
        [Route("api/v{version:apiVersion}/product/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, productService.Delete(id));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }


    
}
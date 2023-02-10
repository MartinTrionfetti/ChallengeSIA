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
    public class CategoryController : ApiController
    {
        private readonly IMapper mapper;

        private readonly ICategoryService categoryService;

        public CategoryController(IMapper mapper, ICategoryService categoryService)
        {
            if (mapper == null)
                throw new ArgumentNullException("mapper");
            this.mapper = mapper;
            this.categoryService = categoryService;
        }

        [HttpGet]
        [Route("api/v{version:apiVersion}/category/{id}")]
        public HttpResponseMessage Get(int id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, categoryService.Get(id));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpGet]
        [Route("api/v{version:apiVersion}/category")]
        public HttpResponseMessage GetAll()
        {
            try
            { 
                return Request.CreateResponse(HttpStatusCode.OK, categoryService.GetAll());
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpPost]
        [Route("api/v{version:apiVersion}/category")]
        public HttpResponseMessage Create(CategoryCreateRequestDto categoryCreateRequestDto)
        {
            try
            {
                var category = mapper.Map<Category>(categoryCreateRequestDto);

                return Request.CreateResponse(HttpStatusCode.OK, categoryService.Create(category));

            }
            catch (Exception ex)
            {

                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpPut]
        [Route("api/v{version:apiVersion}/category")]
        public HttpResponseMessage Update(CategoryCreateRequestDto categoryCreateRequestDto)
        {
            try
            {
                var category = mapper.Map<Category>(categoryCreateRequestDto);

                return Request.CreateResponse(HttpStatusCode.OK, categoryService.Update(category));
            }
            catch (Exception ex)
            {

                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpDelete]
        [Route("api/v{version:apiVersion}/category/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, categoryService.Delete(id));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
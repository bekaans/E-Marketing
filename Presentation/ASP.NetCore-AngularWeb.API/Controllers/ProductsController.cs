using ASP.NetCore_AngularWeb.Application.Repositories;
using ASP.NetCore_AngularWeb.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NetCore_AngularWeb.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
            
        }
        
        [HttpGet]
        public async Task Get()
        {
           await _productWriteRepository.AddAsync(new() { Name = "New product1", Price = 150, Stock = 157, CreateDate = DateTime.UtcNow });
            await _productWriteRepository.SaveAsync();
        }
    }
}

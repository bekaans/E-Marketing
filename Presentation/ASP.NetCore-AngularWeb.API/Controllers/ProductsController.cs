using ASP.NetCore_AngularWeb.Application.Repositories;
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
        public async void Get()
        {
             await _productWriteRepository.AddRangeAsync(new()
            {
                new() { Id = Guid.NewGuid(), Name = "Product1", Price = 100, CreateDate = DateTime.UtcNow, Stock = 10
                },
                new() { Id = Guid.NewGuid(), Name = "Product2", Price = 200, CreateDate = DateTime.UtcNow, Stock = 20
                },
                new() { Id = Guid.NewGuid(), Name = "Product3", Price = 300, CreateDate = DateTime.UtcNow, Stock = 30
                },
            });
            var count = await _productWriteRepository.Save();
            
        }
    }
}

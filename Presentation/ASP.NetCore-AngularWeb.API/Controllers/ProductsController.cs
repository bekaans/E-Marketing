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
            Product p =await _productReadRepository.GetByIdAsync("a3d097bd-8033-489f-b0b5-bde179b8bb64",false);
            p.Name = "Mehmet";
            await _productWriteRepository.SaveAsync();
        }
    }
}

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
        readonly private IOrderWriteRepository _orderWriteRepository;
        readonly private IOrderReadRepository _orderReadRepository;
        readonly private ICustomerReadRepository _customerReadRepository;
        readonly private ICustomerWriteRepository _customerWriteRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository, IOrderWriteRepository orderWriteRepository, IOrderReadRepository orderReadRepository, ICustomerReadRepository customerReadRepository, ICustomerWriteRepository customerWriteRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
            _orderWriteRepository = orderWriteRepository;
            _orderReadRepository = orderReadRepository;
            _customerReadRepository = customerReadRepository;
            _customerWriteRepository = customerWriteRepository;
        }

        [HttpGet]
        public async Task Get()
        {   var customerId = Guid.NewGuid();
            await _customerWriteRepository.AddAsync(new() { Id = customerId, Name = "Berke" });
             await _orderWriteRepository.AddAsync(new() { customerId=customerId , Adress="test adress", Description="test description" });
             await _orderWriteRepository.SaveAsync();
        }
    }
}

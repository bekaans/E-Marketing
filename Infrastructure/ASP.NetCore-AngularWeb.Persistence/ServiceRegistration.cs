using ASP.NetCore_AngularWeb.Application.Repositories;
using ASP.NetCore_AngularWeb.Persistence.Contexts;
using ASP.NetCore_AngularWeb.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NetCore_AngularWeb.Persistence
{
    public static class ServiceRegistration 
    {
       
        
        public static void AddPersistenceRegistration(this IServiceCollection services)
        {
            services.AddDbContext<EmarketingContextDb_>(options => options.UseSqlServer(Configurations.connectingString),ServiceLifetime.Singleton);
            services.AddScoped<ICustomerReadRepository, CustomerReadRepository>();
            services.AddScoped<ICustomerWriteRepository, CustomerWriteRepository>();
            services.AddScoped<IProductReadRepository, ProductReadRepository>();
            services.AddScoped<IProductWriteRepository, ProductWriteRepository>();
            services.AddScoped<IOrderReadRepository, OrderReadRepository>();
            services.AddScoped<IOrderWriteRepository,OrderWriteRepository>();
        }
    }
}

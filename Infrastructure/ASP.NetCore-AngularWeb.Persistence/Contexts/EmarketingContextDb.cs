using ASP.NetCore_AngularWeb.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NetCore_AngularWeb.Persistence.Contexts
{
    public class EmarketingContextDb_ : DbContext
    {
        public EmarketingContextDb_(DbContextOptions options) : base(options) 
        {

        }

      

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}

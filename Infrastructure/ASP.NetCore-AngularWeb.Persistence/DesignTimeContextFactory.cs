using ASP.NetCore_AngularWeb.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NetCore_AngularWeb.Persistence
{
    public class DesignTimeContextFactory : IDesignTimeDbContextFactory<EmarketingContextDb_>
    {
        public EmarketingContextDb_ CreateDbContext(string[] args)
        {
            DbContextOptionsBuilder<EmarketingContextDb_> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseSqlServer(Configurations.connectingString);
            return new(dbContextOptionsBuilder.Options);
        }
    }
}

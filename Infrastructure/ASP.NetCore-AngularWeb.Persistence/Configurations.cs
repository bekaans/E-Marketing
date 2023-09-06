using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NetCore_AngularWeb.Persistence
{
     static class Configurations
    {
        static public string connectingString
        {
            get
            {
                ConfigurationManager configurationManager = new();
                configurationManager.SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../../Presentation/ASP.NetCore-AngularWeb.API"));
                configurationManager.AddJsonFile("appsettings.json");

                return configurationManager.GetConnectionString("SQL");
            }
        }
    }
}

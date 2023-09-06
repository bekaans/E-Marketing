using ASP.NetCore_AngularWeb.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NetCore_AngularWeb.Application.Repositories
{
    public interface IWriteRepository<T> : IRepository<T> where T : BaseEntity
    {
        Task<bool> AddAsync(T model);
        Task<bool> AddAsync(List<T> model);
        Task<bool> Remove(T model);
        Task<bool> Remove(string id);
        Task<bool> Update(T model);
        Task<int> Save();
    }
}

using ASP.NetCore_AngularWeb.Application.Repositories;
using ASP.NetCore_AngularWeb.Domain.Entities.Common;
using ASP.NetCore_AngularWeb.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NetCore_AngularWeb.Persistence.Repositories
{
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntity
    {
        private readonly EmarketingContextDb_ _context;

        public ReadRepository(EmarketingContextDb_ context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public IQueryable<T> GetAll()
         => Table;

        public Task<T> GetByIdAsync(string id)
        => Table.FirstOrDefaultAsync(data => data.Id == Guid.Parse(id));


        public async Task<T> GetSingleAsync(Expression<Func<T, bool>> method)
        => await Table.FirstOrDefaultAsync(method);


        public IQueryable<T> GetWhere(Expression<Func<T, bool>> method)
         => Table.Where(method);
    }
}

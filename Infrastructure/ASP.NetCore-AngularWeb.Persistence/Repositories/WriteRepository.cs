using ASP.NetCore_AngularWeb.Application.Repositories;
using ASP.NetCore_AngularWeb.Domain.Entities.Common;
using ASP.NetCore_AngularWeb.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NetCore_AngularWeb.Persistence.Repositories
{
    public class WriteRepository<T> : IWriteRepository<T> where T : BaseEntity
    {
        private readonly EmarketingContextDb_ _context;

        public WriteRepository(EmarketingContextDb_ context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public async Task<bool> AddAsync(T model)
        {
            EntityEntry<T> entityEntry = await Table.AddAsync(model);
            return entityEntry.State == EntityState.Added;
        }

        public async Task<bool> AddRangeAsync(List<T> datas)
        {
           await Table.AddRangeAsync(datas);
           return true;
        }

        public bool Remove(T model)
        {
           EntityEntry<T> entityEntry= Table.Remove(model);
            return entityEntry.State == EntityState.Deleted;
        }

        public async Task<bool> RemoveAsync(string id)
        {
           T model =await Table.FirstOrDefaultAsync(data => data.Id == Guid.Parse(id));
            return Remove(model);

        }

        public bool RemoveRange(List<T> datas)
        {
           Table.RemoveRange(datas);
            return true;
        }

       

        public async Task<int> SaveAsync()
        
           => await _context.SaveChangesAsync();
        

        public bool Update(T model)
        {
           EntityEntry entityEntry =  Table.Update(model);
            return entityEntry.State == EntityState.Modified;
        }
    }
}

using ChallengeSIA.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace ChallengeSIA
{
    public class AppContext: DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories{ get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasMany<Category>(s => s.Categories)
                .WithMany(c => c.Products)
                .Map(cs =>
                {
                    cs.MapLeftKey("ProductId");
                    cs.MapRightKey("CategoryId");
                    cs.ToTable("ProductCategory");
                });
            //Para prevenir pluralización de nombres de las tablas.
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
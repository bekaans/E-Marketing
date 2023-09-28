using ASP.NetCore_AngularWeb.Application.ViewModels.Products;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ASP.NetCore_AngularWeb.Application.Validations.Products
{
    public class CreateProductValidator : AbstractValidator<VM_Create_Product>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotNull()
                .NotEmpty()
                .WithMessage("Please do not pass the name")
                .MaximumLength(150)
                .MinimumLength(1)
                .WithMessage("5-150");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                .WithMessage("Do not pass emtpy")
                .Must(s => s >= 0)
                .WithMessage("Stock must >0");

            RuleFor(p => p.Price)
               .NotEmpty()
               .NotNull()
               .WithMessage("Do not pass emtpy")
               .Must(s => s >= 0)
               .WithMessage("Price must >0");

        }
    }
}

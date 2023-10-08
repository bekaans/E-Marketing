import { Component,OnInit,EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent  implements OnInit{
  constructor(private productService:ProductService,spinner:NgxSpinnerService,private alertify:AlertifyService){
    super(spinner);
  }
  
  ngOnInit(): void {
    
  }

  @Output() createdProduct:EventEmitter<Create_Product>=new EventEmitter();

create(txtName:HTMLInputElement,txtStock:HTMLInputElement,txtPrice:HTMLInputElement){
  this.showSpinner(spinnerType.ballSpinFadeRotating);
  const create_product:Create_Product = new Create_Product();
  create_product.name=txtName.value;
  create_product.price=parseInt(txtPrice.value);
  create_product.stock=parseFloat(txtStock.value);

  this.productService.createProduct(create_product,()=>{
    this.hideSpinner(spinnerType.ballSpinFadeRotating);
    this.alertify.message("Success",{
      messageType:MessageType.Success,
      position:Position.TopRight,
      delay:4
    });
    this.createdProduct.emit(create_product);
  },errorMessage=>{
    this.alertify.message(errorMessage,{
      delay:2,
      messageType:MessageType.Error,
      position:Position.TopRight
    })
  });
}
}

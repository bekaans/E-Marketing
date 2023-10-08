import { Component,OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-productss',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService){
    super(spinner);
  }
  ngOnInit(): void 
  {
    this.showSpinner(spinnerType.ballSpinFadeRotating);
  }

  @ViewChild(ListComponent)listComponents:ListComponent
  createdProduct(createdProduct:Create_Product){
    this.listComponents.getProducts();
  }
  }

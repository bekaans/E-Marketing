import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-productss',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService){
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(spinnerType.ballSpinFadeRotating);
   /*this.httpClientService.get({
    controller: "products"
   }).subscribe(data=>console.log(data)); */
   /*this.httpClientService.post({
    controller:"products"
   },{
    name:"Defter",
    stock:150,
    price:10
   }).subscribe();
   this.httpClientService.post({
    controller:"products"
   },{
    name:"Silgi",
    stock:150,
    price:10
   }).subscribe();
   */
 /* this.httpClientService.put({
    controller:"products"
  },{
    id: "8ee08d49-d4c3-4c0f-7443-08dbc3435ae9",
    name:"update try1",
    stock:99,
    price:50

  }).subscribe(); */
  this.httpClientService.delete({
    controller:"products"
  },
   "214735b9-67f5-41b7-7446-08dbc3435ae9"
  ).subscribe();
}
  }

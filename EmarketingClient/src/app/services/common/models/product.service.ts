import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  createProduct(product:Create_Product,successCallback?:any){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallback();
        alert("success");
    })
  }
 
}

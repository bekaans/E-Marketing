import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  createProduct(product:Create_Product,successCallback?:any,errorCallBack?:any){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallback();

    },(errorResponse:HttpErrorResponse)=>{
      const _error:Array<{key:string,value:Array<string>}> = errorResponse.error;
      let message="";
      _error.forEach((v,index)=>{
        v.value.forEach((_v,_index)=>{
          message += `${_v}<br>`;
        });
      });
        errorCallBack(message);
    });
  }
 
}

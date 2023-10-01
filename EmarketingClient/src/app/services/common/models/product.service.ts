import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  createProduct(product: Create_Product, succesCallBack?: any){
      this.httpClientService.post({
        controller : "products"
      },product).subscribe(result=>{
        succesCallBack();
        
      },
      (errorResponse: HttpErrorResponse)=>{
        const error=errorResponse.error;
      });


  }
  async read(succesCallBack?:()=>void,errorCallBack?:(errorMessage : string)=>void):Promise<List_Product[]>{
   const promiseData : Promise<List_Product[]> = this.httpClientService.get<List_Product[]>({
      controller:"products"
    }).toPromise();
    promiseData.then(d=>succesCallBack()).catch((errorResponse:HttpErrorResponse)=>errorCallBack(errorResponse.message))
    return await promiseData;
  }
}

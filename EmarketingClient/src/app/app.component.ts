import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmarketingClient';
  constructor(private toastr:ToastrService){
    toastr.warning("Merhaba");
  }
}
//$(document).ready(()=>{
//alert("Jquery Test")})
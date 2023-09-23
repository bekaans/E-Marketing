import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmarketingClient';
  constructor(private toastrService : CustomToastrService){
    toastrService.message("Siparişiniz oluşturuldu","",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopCenter,
      
    });
  }
}
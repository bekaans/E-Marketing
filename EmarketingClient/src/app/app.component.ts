import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmarketingClient';
  constructor(private toastrService : CustomToastrService){
    toastrService.message("merhaba","berke",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopCenter
    });
  }}
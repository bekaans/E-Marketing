import { Component,OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { MessageType,AlertifyService,Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private alertify:AlertifyService){}
  ngOnInit():void{
      this.alertify.message("Hi",MessageType.Success,Position.BottomCenter,15);
  }
}

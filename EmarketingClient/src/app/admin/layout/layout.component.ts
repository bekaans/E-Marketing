import { Component,OnInit } from '@angular/core';
declare var alertify:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(){}
  ngOnInit():void{
    alertify.success('Test12');
  }
}

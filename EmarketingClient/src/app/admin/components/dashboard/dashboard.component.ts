import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

constructor(spinner:NgxSpinnerService){
  super(spinner);
}


  ngOnInit(): void {
  this.showSpinner(spinnerType.ballSpinFadeRotating);
}
}

import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
constructor(private spinner:NgxSpinnerService){}

showSpinner(){
  this.spinner.show();
}
}


export enum spinnerType{
  ballspin = "ball-spin",
  ballSpinFadeRotating = "ball-spin-fade-rotating"

}
import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
constructor(private spinner:NgxSpinnerService){}

showSpinner(spinnerNameType : spinnerType){
  this.spinner.show(spinnerNameType);
  setTimeout(()=> this.hideSpinner(spinnerNameType),750);
}
hideSpinner(spinnerNameType:spinnerType){
  this.spinner.hide(spinnerNameType)
}
}
export enum spinnerType{
  ballspin = "s1",
  ballSpinFadeRotating = "s2"

}
import { Injectable } from '@angular/core';
declare var alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string,messageType:MessageType,position : Position,delay:number=3){
    alertify.set('notifier','delay',delay);
    alertify.set('notifier','position',position);
    alertify[messageType](message);
  }
  dismiss(){
    alertify.dismissAll();
  }
}
export enum MessageType {
  Error = "error",
  Success="success",
  Notify="notify",
  Message="message",
  Warning="warning"
}
export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomRight="bottom-right",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left"
}

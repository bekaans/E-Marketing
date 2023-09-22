import { Injectable } from '@angular/core';
declare var alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string,options:AlertifyOptions){
    alertify.set('notifier','delay',options.delay);
    alertify.set('notifier','position',options.position);
    alertify[options.messageType](message);
  }
  dismiss(){
    alertify.dismissAll();
  }
 
}
export class AlertifyOptions{
  messageType:MessageType=MessageType.Message;
  position:Position=Position.TopCenter;
  delay:number=3;
  
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements  OnInit {

  constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertfiyservice:AlertifyService){
    super(spinner);
  }
  displayedColumns:string[]=['Name','Stock','Price','CreatedDate','UpdatedDate'];
  dataSource:MatTableDataSource<List_Product>=null;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  async ngOnInit() {
    this.showSpinner(spinnerType.ballSpinFadeRotating);
   const allProducts : List_Product[]= await this.productService.read(()=>this.hideSpinner(spinnerType.ballSpinFadeRotating),errorMessage=> this.alertfiyservice.message(errorMessage,{
      delay:2,
      messageType:MessageType.Error,
      position:Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Product>(allProducts);
  }

}

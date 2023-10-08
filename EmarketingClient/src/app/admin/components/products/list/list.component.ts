import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { delay } from 'rxjs';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit,AfterViewInit {

  constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertify:AlertifyService){
    super(spinner);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
  }

  displayedColumns: string[] = ['name', 'stock', 'price','edit','delete'];
  dataSource:MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator)paginator:MatPaginator;
async  getProducts(){

  this.showSpinner(spinnerType.ballSpinFadeRotating);
  const allProducts:{totalCount:number;products:List_Product[]}=
   await this.productService.readProduct
   (this.paginator ? this.paginator.pageIndex:0,this.paginator ? this.paginator.pageSize:5,
    ()=>this.hideSpinner(spinnerType.ballSpinFadeRotating),errorMessage=>this.alertify.message(errorMessage,
      {
      messageType:MessageType.Error,
      position:Position.TopRight,
      delay:2
    }));
    this.dataSource=new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length=allProducts.totalCount;
    this.dataSource.paginator=this.paginator;
}
async pageChanged(){
  await this.getProducts();
}
  async ngOnInit() {
    await this.getProducts();
  }
  }



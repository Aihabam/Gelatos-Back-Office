import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../Api/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {


  allOrders:Observable<any[]>;
  loadingOrders:string;
  itemsOfOrder = [];
  constructor(private orders:OrdersService) { }

  ngOnInit() {
    this.bindOrders();

  }
  bindOrders(){
    this.loadingOrders = 'LOADING ORDERS';
    this.allOrders =  this.orders.getUserOrders(); 
    this.allOrders.subscribe((orders) => {
      this.itemsOfOrder = orders;
     if (orders.length > 0){
       this.loadingOrders = '';
     }else{
       this.loadingOrders = 'NO ORDERS';
     }
    });
  }
  getPastOrderItems(index){
    return this.itemsOfOrder[index]['items'];
    }

}

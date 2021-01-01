import { Component, OnInit } from '@angular/core';
import { WareHouseService } from '../Api/ware-house.service';

@Component({
  selector: 'app-ware-house',
  templateUrl: './ware-house.page.html',
  styleUrls: ['./ware-house.page.scss'],
})
export class WareHousePage implements OnInit {

  storage = {};
  constructor(private wareHouse:WareHouseService) { }

  ngOnInit() {
    this.bindStorageTemp();
  }
  bindStorageTemp(){
 this.wareHouse.getStorageStatus()
 .subscribe((s) => {
   this.storage = s;
   
 })


  
  }

}

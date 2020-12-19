import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WareHousePageRoutingModule } from './ware-house-routing.module';

import { WareHousePage } from './ware-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WareHousePageRoutingModule
  ],
  declarations: [WareHousePage]
})
export class WareHousePageModule {}

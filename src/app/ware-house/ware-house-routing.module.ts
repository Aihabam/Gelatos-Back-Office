import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WareHousePage } from './ware-house.page';

const routes: Routes = [
  {
    path: '',
    component: WareHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WareHousePageRoutingModule {}

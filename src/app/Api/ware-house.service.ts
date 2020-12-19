import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class WareHouseService {

  constructor(private firebase:AngularFireDatabase) {

   }
  public getStorageStatus(){
    return this.firebase.object('back-office/storage').valueChanges();
  }
}

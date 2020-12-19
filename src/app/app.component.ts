import { Component, Injectable } from '@angular/core';

import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from './Api/auth.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  loading:boolean;
  processing:boolean;
  constructor(private auth:AuthService,private toast:ToastController,private navCon:NavController) {
    this.onStart();
  }
  onStart(){
    this.processing = false;
    this.loading = true;
   this.auth.getUser()
   .then((user) => {
      if (user){
        this.navCon.navigateRoot('tabs/orders')
        .then(() => {
          this.loading = false;
        })
      } else{
        this.navCon.navigateRoot('/login')
        .then(() => {
          this.loading = false;
        })

      }
   }).catch((error) => {
    this.showMessage('Something went wrong please try again later.');

   });
  }
  async showMessage(message:string){
    const toast = await this.toast.create({
      message:message,
      duration:2000,
      position:'top'
    });
    return await toast.present();
  }

  
}

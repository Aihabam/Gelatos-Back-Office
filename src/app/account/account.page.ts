import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../Api/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {


  userName:string;
  constructor(private auth:AuthService,private navCon:NavController) { }

  ngOnInit() {
    this.bindAccountInfo();
  }
  // get the user name and set it to the view 
  
  bindAccountInfo(){
    this.auth.getUser()
    .then((user) => {
       if (user){ 
            this.userName = user['email'];
        }else{
         this.navCon.navigateRoot('/login');
       }
    });
  }
  // Logout user and navigate to login page
  logoutClicked(){
    this.auth.signOutUser()
    .then(() => {
      this.navCon.navigateRoot('/login');
    });
  }

}

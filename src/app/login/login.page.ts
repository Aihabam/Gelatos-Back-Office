import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../Api/auth.service';

import { AppComponent } from '../app.component';
import { ValidateService } from '../Services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;
  // Working on it is boolean to disable the inputs and the button while logging in
  workingOnIt:boolean;
  loginButtonText:string;
  constructor(private navCon:NavController,private auth:AuthService,private toast:ToastController,private app:AppComponent) { 

  }

  ngOnInit() {
    this.app.loading = false;
     this.email = '';
     this.password = '';
     this.workingOnIt = false;
     this.loginButtonText =  'LOG ME IN';
  }
   // Validate the input and call login function in auth service 

  loginClicked(){
    if (ValidateService.isEmpty(this.email)){
      this.showMessage('Please enter your email address');
    }else if (!ValidateService.isValidEmail(this.email)){
      this.showMessage('Please enter valid email address.')
    }else if (ValidateService.isEmpty(this.password)){
      this.showMessage('Please enter your password.')
    }else{
      this.loginButtonText = 'PLEASE WAIT...';
      this.workingOnIt = true;
      this.auth.validateAccount(this.email.replace('@','').replace('.',''))
      .then((account) => {
        if (account){
          this.auth.doLogin(this.email,this.password)
          .then(() => {
            // login success  navigate to shop page
           this.navCon.navigateRoot('/tabs/orders');
          });
        }else{
          this.workingOnIt = false;
          this.loginButtonText =  'LOG ME IN';
          alert('Make sure you have been added as admin.')
        }

      }).catch((error) => {
       // login failed there is an error, enable the inputs and show the error 
       this.workingOnIt = false;
       this.loginButtonText =  'LOG ME IN';
       this.showMessage(error);
      });
    }
  
  }
  // Navigate to create account page 
  createAccountClicked(){
    this.navCon.navigateForward('sign-up')

  }
    // Navigate to reset password page 
  resetPasswordClicked(){
    this.navCon.navigateForward('reset-password')
  }
  // Close button clicked  back to pervious page
  closeClicked(){
    this.navCon.back();
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

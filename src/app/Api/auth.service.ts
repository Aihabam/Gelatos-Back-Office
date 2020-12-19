import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor( private firebase:AngularFireAuth,private firebaseDb:AngularFireDatabase) { 

  }
  // Get current user information
  getUser(){
    return new Promise((resolve,reject) => {
     this.firebase.onAuthStateChanged((user) => resolve(user), (error) => reject(error));
    });
  }
  // Login user with email and password
  doLogin(email:string,password:string){
  return new Promise((resolve,reject) => {
  this.firebase.signInWithEmailAndPassword(email,password)
  .then((res) => {
    resolve(res);
  }).catch((error) => {
    if (error.code === "auth/user-not-found"){
      reject("The email address you entered does not exist.");
     }else if (error.code === "auth/wrong-password"){
      reject("You have entered the wrong password");
     }else {
      reject("Something went wrong, please try again later.")
     }
  }); 
  });
  }
  // 
  validateAccount(userName:string){
  return new Promise((resolve,reject) => {
    this.firebaseDb.database.ref('back-office-users').child(userName)
    .get()
    .then((res) => {
      resolve(res.val());
    }).catch(() => {
      reject();
    });
  });
  }



  // sign out users by calling firebase auth signOut
  signOutUser(){
  return new Promise<void>((resolve,reject) => {
    this.firebase.signOut()
    .then(() => {  
     resolve();
    }).catch((error) => {
     reject(error);
    });
  });
  }
}

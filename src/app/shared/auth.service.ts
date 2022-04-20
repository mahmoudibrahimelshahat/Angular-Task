import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth , private router:Router) { }


  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true')
      this.router.navigate(['/videos'])

    },err => {
      alert("something went wrong")
      this.router.navigate(['/login'])
    })
  }


  signup(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
      alert("registeration Successfully");
      this.router.navigate(['/login'])
    },err => {
      this.router.navigate(['/register'])
    })
  }

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem("token")
      localStorage.removeItem("verificationId")
      localStorage.removeItem("user_data")
      localStorage.removeItem("_grecaptcha")
      this.router.navigate(['/login'])
    },err => {
      alert(err.message)
    })
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');

    if (!token)
      return false;

    return true
  }

}

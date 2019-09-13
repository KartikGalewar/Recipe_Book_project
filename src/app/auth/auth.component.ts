import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector:'auth',
    templateUrl:'./auth.component.html'
})

export class AuthComponent{
   isLoginMode = true;
   
   switchToLogin(){
    this.isLoginMode = !this.isLoginMode
   }
   
   onSubmit(formData:NgForm){
    console.log(formData.value);
    formData.reset();
   }
}
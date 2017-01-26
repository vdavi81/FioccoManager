import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


var noValid: String="novalid";
function controlFormValid(c: FormControl) {
  if(c.value.length == 0) {
    console.log('not valid')
    noValid="novalid";
    return {
      noV: true
    }
  }

  // Null means valid, believe it or not
  console.log('valid')
  noValid="valid"
  return null
}

@Component({
  selector: 'formlogin',
  templateUrl: './formlogin.component.html',
 })
export class FormloginComponent implements OnInit {

 public loginForm = this.fb.group({
    user: ["", controlFormValid],
    password: ["", controlFormValid]
  });
 public Messaggio = "";

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

   doLogin(event) {
      if(noValid == "novalid") {
      this.Messaggio="Devi inserire Username e password"
      return;
      } 
   this.Messaggio=" "; 
      
     let user = this.loginForm.value.user;
     let pass = this.loginForm.value.password;
     alert(user+" "+pass);

  }

}

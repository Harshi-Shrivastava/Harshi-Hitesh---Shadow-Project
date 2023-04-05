import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../Model/authentication';
import { BankServiceService } from '../service/bank-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private formBuilder : FormBuilder,private router: Router, private bankService:BankServiceService){}
  loginForm = this.formBuilder.group({
    username : ['',[Validators.required]],
    password : ['',[Validators.required]]
  })
  token:any;
  submitData(logindata:any){
    let login = new Authentication(logindata.username,logindata.password);
    this.bankService.authenticate(login).subscribe((data: any)=>{
      localStorage.setItem('token',data);
      this.router.navigate(['get-bank-list']);  
    }
    )
  }
  get controls(){
    return this.loginForm.controls;
  }
}

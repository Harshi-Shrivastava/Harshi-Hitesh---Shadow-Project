import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from '../Model/bank';
import { BankServiceService } from '../service/bank-service.service';

@Component({
  selector: 'app-add-bank-details',
  templateUrl: './add-bank-details.component.html',
  styleUrls: ['./add-bank-details.component.css']
})
export class AddBankDetailsComponent{
  errorMessage:any;
  banks: Bank[]=[];
constructor(private formBuilder:FormBuilder, private bankService:BankServiceService,private router:Router){}
bankModel:any;
title = "Bank Form";
bankForm = this.formBuilder.group({
bankType:['', [Validators.required]],
accountNumber: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+'), Validators.maxLength(16)]],
accountType:['', [Validators.required]],
accountOwnerName:['', [Validators.required]],
nickname:[''],
primaryBank:['', [Validators.required]],
status:['', [Validators.required]],
authenticationMethod:[''],
transactionType:['', [Validators.required]],
communicationChannel:['', [Validators.required]]
 
  });

  
  submitData(bankData:any){
  let bank =new Bank(undefined,bankData.bankType,bankData.accountNumber,bankData.accountType,
    bankData.accountOwnerName,bankData.nickname,bankData.primaryBank,bankData.status,
    bankData.authenticationMethod,bankData.transactionType,bankData.communicationChannel);
  this.bankService.addBank(bank).subscribe(
    data => {
      this.bankModel = data;
        console.log(this.bankModel);
        alert("Bank Added Succesfully" + this.bankModel.bankId);
        this.router.navigate(['get-bank-list']);
      },
      error=>this.errorMessage=error
    )
  }
  get controls() {
    return this.bankForm.controls;
  }
  
}
  




import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../Model/bank';
import { BankServiceService } from '../service/bank-service.service';

@Component({
  selector: 'app-delete-bank',
  templateUrl: './delete-bank.component.html',
  styleUrls: ['./delete-bank.component.css']
})
export class DeleteBankComponent {
  deleteBank(arg0: Bank) {
      throw new Error("Method not implemented.");
  }
  delete(arg0: any) {
      throw new Error("Method not implemented.");
  }
  banks: any;
  message:any;
  flag=false;
  constructor(private route:ActivatedRoute,private router:Router,private service:BankServiceService){}
  errorMessage: any;
  ngOnInit(): void {
   let id = this.route.snapshot.paramMap.get("bid")
   this.service.deleteBank(id).subscribe(
    data=>{
    this.message = "Data has been Deleted Successfully!!";
    this.flag=!this.flag;
    },
    error=>this.errorMessage=error
   )
  }
  accounts(){
  this.router.navigate(['get-bank-list']);
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../Model/bank';
import { BankServiceService } from '../service/bank-service.service';

@Component({
  selector: 'app-get-bank-list',
  templateUrl: './get-bank-list.component.html',
  styleUrls: ['./get-bank-list.component.css']
})
export class GetBankListComponent implements OnInit{
  pageSize = 5;
  sortBy = 'bankId';
  pageSizes = [5,8,10];
  constructor(private bankService:BankServiceService,private router:Router){}

  banks:Bank[] = [];
  page : number =0;
  pages: Array<number>=[];

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.bankService.getBanks(this.page,this.pageSize,this.sortBy).subscribe(bankData => {
      console.log(bankData);
      this.banks = bankData['content'];
      this.pages = new Array(bankData['totalPages']);
    });
  }
  setPage(i: number, event: any){
    event.preventDefault();
    this.page=i;
    this.get();
  }
  handlePageSizeChange(event: any) {
    this.pageSize=event.target.value;
    this.page=0;
    this.get();
  }
  handleSortChange(event:any){
    this.sortBy=event.target.value;
    this.pageSize = 5;
    this.page = 0;
    this.get();
  }
  deleteBank(bankId:any){
    let result = confirm("Are you sure to delete")
    if(result){
    this.router.navigate(['delete-bank',bankId]);
    }
  }
  editBank(Bank:any){
    this.router.navigate(['update-bank',{bankData:JSON.stringify(Bank)}]);
  }

}




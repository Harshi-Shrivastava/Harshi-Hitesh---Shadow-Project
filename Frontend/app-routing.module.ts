import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBankDetailsComponent } from './add-bank-details/add-bank-details.component';
import { DeleteBankComponent } from './delete-bank/delete-bank.component';
import { GetBankListComponent } from './get-bank-list/get-bank-list.component';
import { LoginComponent } from './login/login.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';

const routes: Routes = [
  {path : '', redirectTo : 'get-bank-list', pathMatch : 'full'},
 // {path : 'login', component: LoginComponent},
  {path : 'get-bank-list', component: GetBankListComponent},
  {path : 'add-bank-details', component: AddBankDetailsComponent},
  {path : 'delete-bank/:bid', component: DeleteBankComponent},
  {path : 'update-bank', component: UpdateBankComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

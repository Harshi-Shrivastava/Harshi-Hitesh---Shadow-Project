import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddBankDetailsComponent } from './add-bank-details/add-bank-details.component';
import { GetBankListComponent } from './get-bank-list/get-bank-list.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { DeleteBankComponent } from './delete-bank/delete-bank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddBankDetailsComponent,
    GetBankListComponent,
    UpdateBankComponent,
    DeleteBankComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  //    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
  //   multi: true,

  bootstrap: [AppComponent]
})
export class AppModule { }

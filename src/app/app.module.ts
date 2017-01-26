import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { FormloginComponent } from './formlogin/formlogin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadHomeComponent } from './head-home/head-home.component';
import { ButtonPannelComponent } from './button-pannel/button-pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    FormloginComponent,
    HeaderComponent,
    FooterComponent,
    HeadHomeComponent,
    ButtonPannelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ValidEmailMessageComponent } from './valid-email-message/valid-email-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ValidEmailMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { routing } from './app.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ValidEmailMessageComponent } from './valid-email-message/valid-email-message.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

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
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

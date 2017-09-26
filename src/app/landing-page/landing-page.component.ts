import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  emailValid: boolean = null;
  captchaSiteKey: string = environment.captchaSiteKey;
  captchaResponse: string = null;
  unsuccessfulMessage: string;

  constructor(private http: HttpClient,
              private router: Router,
              translate: TranslateService) {
                translate.setDefaultLang('en');
                translate.use('en');
              }

  submitEmail(email: string) {
    this.validateEmail(email);
    if (this.emailValid && this.captchaResponse !== null) {
      this.router.navigateByUrl('/success');
      const payload = JSON.stringify({"text": email + " wants to join the Swiftfest Slack Channel!"});
      const headers = new HttpHeaders().append("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
      this.http.request(
        "POST",
        environment.slackWebHookUrl,
        {
          "body": payload,
          "headers": headers,
          "responseType": "text"
        }
      ).subscribe();
      this.unsuccessfulMessage = null;
    } else if (this.emailValid===false) {
      this.unsuccessfulMessage = "Email address is invalid, Please try again";
    } else if (this.captchaResponse===null){
      this.unsuccessfulMessage = "Please verify that you are not a bot by checking the captcha box.";
    }
    grecaptcha.reset();
    this.captchaResponse = null;
  }

  validateEmail(email: string) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (pattern.exec(email) !== null)? this.emailValid = true: this.emailValid = false;
  }

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  emailInput: string;
  emailValid: boolean = false;
  captchaSiteKey: string = environment.captchaSiteKey;
  captchaResponse: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submitEmail(email: string) {
    this.validateEmail(email);
    if (this.emailValid) {
      grecaptcha.reset();
      const payload = JSON.stringify({"text": email + " wants to join the Swiftfest Slack Channel!",});
      this.http.request(
        "POST",
        environment.slackWebHookUrl,
        {
          "body": payload,
        }
      ).subscribe();
    }
  }

  validateEmail(email: string) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (pattern.exec(email) !== null)? this.emailValid = true: this.emailValid = false;
  }

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
  }

}

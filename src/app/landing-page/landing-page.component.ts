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
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submitEmail(email: string) {
    this.validateEmail(email);
    if (this.emailValid && this.captchaResponse !== undefined) {
      const payload = JSON.stringify({"text": email + " wants to join the Swiftfest Slack Channel!",});
      this.http.request(
        "POST",
        environment.slackWebHookUrl,
        {
          "body": payload,
        }
      ).subscribe();
      this.message = "Thank You! You will get a slack invitation in the next 24 hours.";
    } else if (!this.emailValid && this.captchaResponse === undefined) {
      this.message = "Unfortunately, you will need to fill in both the email and the captcha.";
    } else if (!this.emailValid && this.captchaResponse !== undefined) {
      this.message = "Please enter a valid email.";
    } else {
      this.message = "Please verify that you are not a bot by checking the captcha box.";
    }
    grecaptcha.reset();
    this.captchaResponse = undefined;
  }

  validateEmail(email: string) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (pattern.exec(email) !== null)? this.emailValid = true: this.emailValid = false;
  }

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
  }

}

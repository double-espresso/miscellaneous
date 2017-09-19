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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submitEmail(email) {
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

// curl -X POST --data-urlencode 'payload={"username": "webhookbot", "text": "This is posted to #general and comes from a bot named webhookbot.", "icon_emoji": ":ghost:"}' https://hooks.slack.com/services/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

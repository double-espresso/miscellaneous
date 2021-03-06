import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(translate: TranslateService, private title:Title) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.get('title').subscribe((res: string) => {
      title.setTitle(res);
    });
  }
}

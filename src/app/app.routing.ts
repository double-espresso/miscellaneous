import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ValidEmailMessageComponent } from './valid-email-message/valid-email-message.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'success' , component: ValidEmailMessageComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

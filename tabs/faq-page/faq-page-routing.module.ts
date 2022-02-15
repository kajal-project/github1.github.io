import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FAQPagePage } from './faq-page.page';

const routes: Routes = [
  {
    path: '',
    component: FAQPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FAQPagePageRoutingModule {}

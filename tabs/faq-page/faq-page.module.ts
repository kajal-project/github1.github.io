import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FAQPagePageRoutingModule } from './faq-page-routing.module';

import { FAQPagePage } from './faq-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FAQPagePageRoutingModule
  ],
  declarations: [FAQPagePage]
})
export class FAQPagePageModule {}

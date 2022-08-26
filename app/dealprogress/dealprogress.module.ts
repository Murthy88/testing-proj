import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealprogressRoutingModule } from './dealprogress-routing.module';
import { DealprogressComponent } from './dealprogress.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [DealprogressComponent],
  imports: [
    CommonModule,
    DealprogressRoutingModule,
    HeaderModule
  ]
})
export class DealprogressModule { }

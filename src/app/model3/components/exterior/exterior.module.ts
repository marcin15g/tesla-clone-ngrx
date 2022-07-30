import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExteriorRoutingModule } from './exterior-routing.module';
import { ExteriorComponent } from './exterior.component';


@NgModule({
  declarations: [
    ExteriorComponent
  ],
  imports: [
    CommonModule,
    ExteriorRoutingModule
  ]
})
export class ExteriorModule { }

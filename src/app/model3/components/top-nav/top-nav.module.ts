import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavRoutingModule } from './top-nav-routing.module';
import { TopNavComponent } from './top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar'



@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    TopNavRoutingModule,
    MatToolbarModule
  ],
  exports: [
    TopNavComponent
  ]
})
export class TopNavModule { }

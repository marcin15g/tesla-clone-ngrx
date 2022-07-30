import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomNavRoutingModule } from './bottom-nav-routing.module';
import { BottomNavComponent } from './bottom-nav.component';


@NgModule({
  declarations: [
    BottomNavComponent
  ],
  imports: [
    CommonModule,
    BottomNavRoutingModule
  ],
  exports: [
    BottomNavComponent
  ]
})
export class BottomNavModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavRoutingModule } from './top-nav-routing.module';
import { TopNavComponent } from './top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    TopNavRoutingModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    TopNavComponent
  ]
})
export class TopNavModule { }

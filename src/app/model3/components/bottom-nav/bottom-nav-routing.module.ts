import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomNavComponent } from './bottom-nav.component';

const routes: Routes = [{ path: '', component: BottomNavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottomNavRoutingModule { }

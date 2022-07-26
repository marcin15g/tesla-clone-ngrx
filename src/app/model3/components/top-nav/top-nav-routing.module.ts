import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './top-nav.component';

const routes: Routes = [{ path: '', component: TopNavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopNavRoutingModule { }

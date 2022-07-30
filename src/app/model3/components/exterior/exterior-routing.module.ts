import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExteriorComponent } from './exterior.component';

const routes: Routes = [{ path: '', component: ExteriorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExteriorRoutingModule { }

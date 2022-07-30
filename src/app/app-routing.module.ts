import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'model3',
    pathMatch: 'full'
  },
  { 
    path: 'model3', 
    loadChildren: () => import('./model3/model3.module').then(m => m.Model3Module) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

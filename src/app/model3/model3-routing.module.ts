import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Model3Component } from './model3.component';

const routes: Routes = [
  { 
    path: '', 
    component: Model3Component,
    children: [
      { 
        path: 'car', 
        loadChildren: () => import('./components/car/car.module').then(m => m.CarModule) 
      },
      { 
        path: 'exterior', 
        loadChildren: () => import('./components/exterior/exterior.module').then(m => m.ExteriorModule) 
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Model3RoutingModule { }

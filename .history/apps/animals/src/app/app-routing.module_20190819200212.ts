import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: '**', pathMatch:'full', redirectTo: 'animals' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

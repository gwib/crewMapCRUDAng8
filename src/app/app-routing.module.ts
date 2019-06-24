import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CrewAddComponent } from './crew-add/crew-add.component';
import { CrewEditComponent } from './crew-edit/crew-edit.component';
import { CrewGetComponent } from './crew-get/crew-get.component';

const routes: Routes = [
  {
    path: 'crew/create',
    component: CrewAddComponent
  },
  {
    path: 'edit/:id',
    component: CrewEditComponent
  },
  {
    path: 'crews',
    component: CrewGetComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

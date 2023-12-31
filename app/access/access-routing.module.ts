import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesPage } from './access.page';

const routes: Routes = [
  {
    path: '',
    component: AccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessPageRoutingModule {}

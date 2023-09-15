import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprodPage } from './reprod.page';

const routes: Routes = [
  {
    path: '',
    component: ReprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprodPageRoutingModule {}

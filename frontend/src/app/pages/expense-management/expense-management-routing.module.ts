import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseManagementPage } from './expense-management.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseManagementPageRoutingModule {}

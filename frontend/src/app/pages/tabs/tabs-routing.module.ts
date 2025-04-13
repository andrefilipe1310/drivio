import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'insights',
        loadChildren: () =>
          import('../insights/insights.module').then(m => m.InsightsPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(m => m.ProfilePageModule),
      },
      {
        path: 'finance',
        loadChildren: () =>
          import('../finance/finance.module').then(m => m.FinancePageModule),
      },
      {
        path: 'expense-management',
        loadChildren: () =>
          import('../expense-management/expense-management.module').then(m => m.ExpenseManagementPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/insights',
        pathMatch: 'full',
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

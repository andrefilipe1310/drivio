import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseManagementPageRoutingModule } from './expense-management-routing.module';

import { ExpenseManagementPage } from './expense-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseManagementPageRoutingModule
  ],
  declarations: [ExpenseManagementPage]
})
export class ExpenseManagementPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancePageRoutingModule } from './finance-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { FinancePage } from './finance.page';
import { CardGoalsComponentModule } from 'src/app/components/card-goals/card-goals.module';
import { EarningsSimulatorComponentModule } from 'src/app/components/earnings-simulator/earnings-simulator.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    CardGoalsComponentModule,
    FinancePageRoutingModule,
    EarningsSimulatorComponentModule
  ],
  declarations: [FinancePage]
})
export class FinancePageModule {}

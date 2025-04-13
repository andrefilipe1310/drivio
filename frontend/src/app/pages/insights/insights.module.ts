import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsightsPageRoutingModule } from './insights-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { InsightsPage } from './insights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    InsightsPageRoutingModule
  ],
  declarations: [InsightsPage]
})
export class InsightsPageModule {}

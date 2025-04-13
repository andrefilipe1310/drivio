import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarningsSimulatorComponent } from './earnings-simulator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [EarningsSimulatorComponent],
  declarations: [EarningsSimulatorComponent]
})
export class EarningsSimulatorComponentModule {}

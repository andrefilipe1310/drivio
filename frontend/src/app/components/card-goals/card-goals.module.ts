import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardGoalsComponent } from './card-goals.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  exports: [CardGoalsComponent],
  declarations: [CardGoalsComponent]
})
export class CardGoalsComponentModule {}

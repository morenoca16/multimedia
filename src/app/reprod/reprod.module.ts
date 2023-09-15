import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReprodPageRoutingModule } from './reprod-routing.module';

import { ReprodPage } from './reprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReprodPageRoutingModule
  ],
  declarations: [ReprodPage]
})
export class ReprodPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CronometroPage } from './cronometro';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CronometroPage,
  ],
  imports: [
    IonicPageModule.forChild(CronometroPage),
 
  ],
})
export class CronometroPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Show1 } from './show1';

@NgModule({
  declarations: [
    Show1,
  ],
  imports: [
    IonicPageModule.forChild(Show1),
  ],
  exports: [
    Show1
  ]
})
export class Show1Module {}

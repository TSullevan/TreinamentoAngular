import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { StoragePageComponent } from './pages/storage-page/storage-page.component';


@NgModule({
  declarations: [
    StoragePageComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule
  ]
})
export class StorageModule { }

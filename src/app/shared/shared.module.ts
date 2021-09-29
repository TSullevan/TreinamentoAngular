import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MasterPageComponent,
    NotFoundPageComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    InputComponent
  ]
})
export class SharedModule { }

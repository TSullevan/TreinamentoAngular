import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { InputComponent } from './components/input/input.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { AbbreviatePipe } from './pipes/abbreviate.pipe';
import { PascalCasePipe } from './pipes/pascal-case.pipe';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent,
    MasterPageComponent,
    NotFoundPageComponent,
    InputComponent,
    FormComponent,
    AbbreviatePipe,
    PascalCasePipe,
    FirstLetterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    InputComponent,
    FormComponent,
    AbbreviatePipe,
    PascalCasePipe,
    FirstLetterPipe
  ],
  providers: [HttpClient]
})
export class SharedModule { }

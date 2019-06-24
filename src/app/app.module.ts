import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrewAddComponent } from './crew-add/crew-add.component';
import { CrewGetComponent } from './crew-get/crew-get.component';
import { CrewEditComponent } from './crew-edit/crew-edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CrewAddComponent,
    CrewGetComponent,
    CrewEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

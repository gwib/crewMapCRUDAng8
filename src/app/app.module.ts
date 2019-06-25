import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrewAddComponent } from './crew-add/crew-add.component';
import { CrewGetComponent } from './crew-get/crew-get.component';
import { CrewEditComponent } from './crew-edit/crew-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { CrewsService } from './crews.service';

@NgModule({
  declarations: [
    AppComponent,
    CrewAddComponent,
    CrewGetComponent,
    CrewEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,

  ],
  providers: [ CrewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

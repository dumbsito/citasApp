import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ResultadoComponent } from './components/resultado/resultado.component';



@NgModule({
  declarations: [
    AppComponent,
 FormComponent,
 ResultadoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

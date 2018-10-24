import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServidoresComponent } from './servidores/servidores.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServidoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


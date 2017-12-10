import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//import { ngMaterialModule } from './module/ngMaterial.module';

import { AppComponent } from './app.component';
import { CmpMyComponent } from './components/cmp-my/cmp-my.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpMyComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

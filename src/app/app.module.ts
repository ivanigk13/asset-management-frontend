import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { ComponentModule } from './components/component.module';
import { HttpHandlerAsset } from './http/http-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouter,
    FormsModule,
    ComponentModule,
    CommonModule,
    HttpClientModule,
    ToastModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([])
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpHandlerAsset,
      multi : true
    },
    MessageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localEsAR from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';


registerLocaleData(localEsAR)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ButtonModule,BrowserAnimationsModule],
  providers: [{provide:LOCALE_ID,useValue:'es-AR'}],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SecuredomPipe } from './pipes/securedom.pipe';
import { ShowhidePipe } from './pipes/showhide.pipe';
registerLocaleData(localeES);
registerLocaleData(localeFR);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SecuredomPipe,
    ShowhidePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

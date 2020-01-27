import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { GlobalesProvider } from '../providers/globales/globales';
import { DatosProvider } from '../providers/datos/datos';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoticiasPage } from '../pages/noticias/noticias';
import { PodcastPage } from '../pages/podcast/podcast';

import { StripHtmlPipe } from '../pipes/striphtml/striphtml';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NoticiasPage,
    PodcastPage,
    StripHtmlPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PodcastPage,
    NoticiasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalesProvider,
    DatosProvider
  ]
})
export class AppModule {}

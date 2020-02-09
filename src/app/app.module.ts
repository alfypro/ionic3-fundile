import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { GlobalesProvider } from '../providers/globales/globales';
import { DatosProvider } from '../providers/datos/datos';
// import { NativeAudio } from '@ionic-native/native-audio';
import { Media } from '@ionic-native/media';
import { MusicControls } from '@ionic-native/music-controls';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoticiasPage } from '../pages/noticias/noticias';
import { PodcastPage } from '../pages/podcast/podcast';

import { StripHtmlPipe } from '../pipes/striphtml/striphtml';

// import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
 
// /**
//  * Sample custom factory function to use with ionic-audio
//  */
// export function myCustomAudioProviderFactory() {
//   return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
// }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NoticiasPage,
    PodcastPage,
    StripHtmlPipe
  ],
  imports: [
    // IonicAudioModule.forRoot(defaultAudioProviderFactory), 
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
    Media,
    MusicControls,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // NativeAudio,
    GlobalesProvider,
    DatosProvider
  ]
})
export class AppModule {}

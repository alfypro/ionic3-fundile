import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalesProvider } from '../../providers/globales/globales';
import { DatosProvider } from '../../providers/datos/datos';

import { NoticiasPage } from '../noticias/noticias';
import { PodcastPage } from '../podcast/podcast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias: any;
  podcast: any;
  constructor(public navCtrl: NavController, public global: GlobalesProvider, private datos: DatosProvider) {

  }
  
  cargarNoticias(){
    this.datos.getRespuesta(this.global.fuente + 'noticias/', 'Cargando noticias').then((respuesta: any)=> {
      this.noticias = respuesta;
      this.navCtrl.push(NoticiasPage, this.noticias);
    });
    
  }
  
  cargarPodcast(){
    // this.datos.getRespuesta(this.global.fuente + 'podcast/', 'Cargando podcast').then((respuesta: any)=> {
    //   this.podcast = respuesta;
    //   this.navCtrl.push(PodcastPage, this.podcast);
    // });
    this.navCtrl.push(PodcastPage, this.podcast);
  }

}

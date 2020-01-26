import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalesProvider } from '../../providers/globales/globales';
import { DatosProvider } from '../../providers/datos/datos';

import { NoticiasPage } from '../noticias/noticias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias: any;
  constructor(public navCtrl: NavController, public global: GlobalesProvider, private datos: DatosProvider) {

  }
  
  cargarNoticias(){
    this.datos.getRespuesta(this.global.fuente+'noticias', 'Cargando noticias').then((respuesta: any)=> {
      this.noticias = respuesta;
      this.navCtrl.push(NoticiasPage, this.noticias);
    });
    
  }

}

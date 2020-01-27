import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
//import { Http } from '@angular/http';
import { HttpClient  } from '@angular/common/http';
//import 'rxjs/Rx'

@Injectable()
export class DatosProvider {

  constructor(public loadingCtrl: LoadingController, private http: HttpClient) {

  }
  getRespuesta(api:string, operacion:string = '', datos:any = []){
    
    // console.log(api);

    // iniciamos loading
    let loading = this.loadingCtrl.create({ content: operacion!=''?operacion:'Cargando '+'...' });
    let loadingPresented = false;
    let loadingTimer = setTimeout(() => { loadingPresented = true;  loading.present(); }, 500);
    // /iniciamos loading

    return new Promise((resolve) => {

      let respuesta;

      this.http.get(api,datos).subscribe(
        data => {
          //console.log(data);
          finalizar();
          resolve(data);
        },
        error => {
          console.log(error);
          finalizar();
          resolve({ error: true, conexion: true, mensaje: { title: '¡Error!', template: 'Error al obtener los datos.'} });
        }
      );

    });

    function finalizar(){
      // finalizamos loading
      if (loadingPresented) {
        loading.dismiss();
      } else {
        clearTimeout(loadingTimer);
        loading.dismiss();
      }
      // /finalizamos loading
    }
  }

  getDatosApi(data: any, api: string){

    // iniciamos loading
    let loading = this.loadingCtrl.create({ content: data.get('operacion')?data.get('operacion'):'Cargando '+'...' });
    let loadingPresented = false;
    let loadingTimer = setTimeout(() => { loadingPresented = true;  loading.present(); }, 500);
    // /iniciamos loading

    return new Promise((resolve) => {

      let respuesta;
      let rq = new XMLHttpRequest();
      rq.open("POST", api);
      rq.setRequestHeader('Accept-Language', window.navigator.language);
      rq.send(data); 
      rq.onreadystatechange = function(respuesta) {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            try{
              respuesta = JSON.parse(this.responseText);
              respuesta = {...respuesta, conexion: true}
              resolve(respuesta);
            }
            catch(e){
              console.error('opcion: ' + data.get('opcion'));
              console.error(this.responseText);
              console.error(e);
              resolve({ error: true, conexion: true, mensaje: { title: '¡Error!', template: 'Los datos obtenidos no son válidos.'} });
            }
          }
          else {
            console.error('opcion: ' + data.get('opcion'));
            resolve({ error: true, conexion: false, mensaje: { title: '¡Error!', template: 'Error de conexión.'} });
          }
          
          // finalizamos loading
          if (loadingPresented) {
            loading.dismiss();
          } else {
            clearTimeout(loadingTimer);
            loading.dismiss();
          }
          // /finalizamos loading
        }
      }.bind(rq, respuesta);
    });
  }
}

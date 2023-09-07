import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})


export class AccesPage {
  usuario: string | undefined;
  tipo: any[] = [
    {id: 1, tipo: 'Primera Consulta'},
    {id: 2, tipo: 'Segunda Consulta '},
    {id: 3, tipo: 'Reclamo '}
  ];
  data: any = {
    nombre: '',
    apellido: '',
    education: '',
    nacimiento: ''
  };
  constructor(public alertController: AlertController) {

  }
  /**
   * Metodo limpíar recorre un objeto y se define el
   * valor de su propiedad en ""
   */
  limpiar(){
    for (const [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data, key, {value: ''});
    }
  }

  mostrar(){
    (this.data.nombre !== '' && this.data.apellido !== '') &&
    this.presentAlert('Usuario', 'Su nombre es ' + this.data.nombre + ' ' + this.data.apellido);
  }

  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

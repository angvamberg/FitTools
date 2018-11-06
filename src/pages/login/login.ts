import { MenuPage } from './../menu/menu';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { ExerciciosPage } from '../exercicios/exercicios';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  isenabled:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(false,'myMenu');
  }

  ionViewWillLeave(){
    this.menuCtrl.enable(true,'myMenu');
  }

  Entrar(){
    this.navCtrl.setRoot(MenuPage);
  }
}

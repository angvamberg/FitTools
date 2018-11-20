import { CadastroPage } from './../cadastro/cadastro';
import { MenuPage } from './../menu/menu';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { ExerciciosPage } from '../exercicios/exercicios';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,private fb: Facebook,private fire: AngularFireAuth) {
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

  cadastrar(){
    this.navCtrl.push(CadastroPage);
  }

  loginFb(){

    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
       .then( response => {
         const facebookCredential = firebase.auth.FacebookAuthProvider
           .credential(response.authResponse.accessToken);
   
         firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential)
           .then( success => { 
             alert("Login Efetuado com sucesso: " + JSON.stringify(success.additionalUserInfo.profile)); 
           });
   
       }).catch((error) => { console.log(JSON.stringify(error)) });
       this.Entrar()
   }  
  
   

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: Facebook,private fire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  voltar(){
    this.navCtrl.pop();
  }

  cadastroFb(){

    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
       .then( response => {
         const facebookCredential = firebase.auth.FacebookAuthProvider
           .credential(response.authResponse.accessToken);
   
         firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential)
           .then( success => { 
             alert("Login Efetuado com sucesso: " + JSON.stringify(success.additionalUserInfo.profile)); 
           });
   
       }).catch((error) => { console.log(JSON.stringify(error)) });
   }  
}

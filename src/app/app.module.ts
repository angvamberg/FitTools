import { CronometroInicioPage } from './../pages/cronometro-inicio/cronometro-inicio';
import { CronometroPageModule } from './../pages/cronometro/cronometro.module';
import { MenuPageModule } from './../pages/menu/menu.module';
import { MenuPage } from './../pages/menu/menu';
import { ExerciciosPageModule } from './../pages/exercicios/exercicios.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CronometroPage } from '../pages/cronometro/cronometro';
import { LoginPageModule } from '../pages/login/login.module';
import { RotaPageModule } from '../pages/rota/rota.module';
import { ImcPageModule } from '../pages/imc/imc.module';
import { ResultadoPage } from '../pages/resultado/resultado';
import { ExerciciosPage } from '../pages/exercicios/exercicios';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { SobrePage } from '../pages/sobre/sobre';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CronometroPage,
    ResultadoPage,
    CronometroInicioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RotaPageModule,
    ImcPageModule,
    ExerciciosPageModule,
    MenuPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CronometroPage,
    ResultadoPage,
    MenuPage,
    CronometroInicioPage,
  ],
  providers: [
    StatusBar,
    NativeGeocoder,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { CronometroInicioPage } from './../pages/cronometro-inicio/cronometro-inicio';
import { LoginnPage } from './../pages/loginn/loginn';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CronometroPage,
    ResultadoPage,
    SobrePage,
    LoginnPage,
    CronometroInicioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RotaPageModule,
    ImcPageModule,
    ExerciciosPageModule,
    MenuPageModule,
    LoginPageModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CronometroPage,
    ResultadoPage,
    MenuPage,
    SobrePage,
    LoginnPage,
    CronometroInicioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

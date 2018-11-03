import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { GeneroPage } from '../pages/genero/genero';
import { LancamentosPage } from '../pages/lancamentos/lancamentos';
import { PopularidadePage } from '../pages/popularidade/popularidade';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { FilmePageModule } from '../pages/filme/filme.module';

@NgModule({
  declarations: [
    MyApp,
    CadastrarPage,
    GeneroPage,
    LancamentosPage,
    PopularidadePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    FilmePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastrarPage,
    GeneroPage,
    LancamentosPage,
    PopularidadePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

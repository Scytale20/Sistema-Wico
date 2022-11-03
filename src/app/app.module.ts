import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { MainComponent } from './component/main/main.component';
import { EntradasComponent } from './component/entradas/entradas.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { registerLocaleData } from '@angular/common';

import localeIt from '@angular/common/locales/it'

registerLocaleData(localeIt,'it' ) 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideBarComponent,
    NavBarComponent,
    MainComponent,
    EntradasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

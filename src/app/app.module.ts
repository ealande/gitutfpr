import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
<<<<<<< Updated upstream
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ItemListarComponent } from './item/item-listar/item-listar/item-listar.component';
import { ItemCadastrarEditarComponent } from './item/item-cadastrar-editar/item-cadastrar-editar/item-cadastrar-editar.component';
import { FormsModule } from '@angular/forms';
=======
import { ItemListarComponent } from './itemListar/item-listar.component';
import { CommonModule } from '@angular/common';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
<<<<<<< Updated upstream
    HomeComponent,
    ItemListarComponent,
    ItemCadastrarEditarComponent
=======
    ItemListarComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
<<<<<<< Updated upstream
    HttpClientModule,
    ScrollingModule,
    FormsModule
=======
    CommonModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

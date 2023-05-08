import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { NoticiaRotativaComponent } from './noticia-rotativa/noticia-rotativa.component';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginaPaiComponent } from './pagina-pai/pagina-pai.component';
import { PaginaFilho1Component } from './pagina-filho1/pagina-filho1.component';
import { PaginaFilho2Component } from './pagina-filho2/pagina-filho2.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopoComponent,
    NoticiaRotativaComponent,
    CardNoticiaComponent,
    CalcularMediaComponent,
    NotFoundComponent,
    PaginaPaiComponent,
    PaginaFilho1Component,
    PaginaFilho2Component,
    FormTemplateDrivenComponent,
    FormReactiveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

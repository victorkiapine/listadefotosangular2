import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FotoModule }    from './foto/foto.module';
import { HttpModule }    from '@angular/http';
import { PainelModule }  from './painel/painel.module';
import { AppComponent }  from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FotoModule, 
    HttpModule, 
    PainelModule, 
    routing, 
    FormsModule, 
    ReactiveFormsModule, 
    BotaoModule,
    ModalModule
  ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
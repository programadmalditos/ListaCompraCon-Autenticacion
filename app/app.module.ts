import { NgModule } from '@angular/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DefaultComponent } from './Component/default-component/default.component';
import { LoginComponent } from './Component/login-component/login.component';
import { AppComponent } from './Component/main/app.component';
import { FormularioProductoComponent } from './Component/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './Component/listado-productos/listado-productos.component';
import { ListaComraFileService } from './Services/listaCompraFile-service/listaCompraFile-service';
import { ListaCompraApiService } from './Services/listaCompraApi-service/listaCompraApi-service';
import { AuthService } from './Services/auth-service/Auth-service';
import { routing } from './Routes/app.routing';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, Ng2Bs3ModalModule, routing],
  declarations: [AppComponent, FormularioProductoComponent, ListadoProductosComponent, DefaultComponent, LoginComponent],
  bootstrap: [DefaultComponent],
  providers: [ListaComraFileService, ListaCompraApiService, AuthService, AuthGuard]
})
export class AppModule { }

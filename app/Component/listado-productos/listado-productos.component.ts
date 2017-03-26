import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Producto} from '../../Classes/Producto';
import { Router } from '@angular/router';
import { ListaCompraApiService } from '../../Services/listaCompraApi-service/listaCompraApi-service';


@Component({
    moduleId: module.id,
    selector: 'listado-productos',
    templateUrl: 'listado-productos.html'

})

export class ListadoProductosComponent{
     @Input() productos: Array<Producto>;
     @Output() borrado: EventEmitter<Producto>=new EventEmitter<Producto>();
     @Output() modificado: EventEmitter<Producto> = new EventEmitter<Producto>();
     displayProducto(producto: Producto) {
        console.log(producto);
     }
    constructor(private servicio: ListaCompraApiService, private router: Router) {

    }
    removeProducto(model: Producto) {
        this.servicio.removeProducto(model).subscribe(o => {
            this.borrado.emit(model);
        }, e=>{
            sessionStorage.removeItem('token');
            this.router.navigate(['/login']);
        });
    }
    modificarProducto(model: Producto) {
        this.modificado.emit(model);
    }
}
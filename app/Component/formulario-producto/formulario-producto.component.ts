import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Producto} from '../../Classes/Producto';

@Component({
    moduleId: module.id,
    selector: 'formulario-producto',
    templateUrl: 'formulario-producto.html'

})

export class FormularioProductoComponent{
    @Input()  model: Producto;
    @Output() onsubmit= new EventEmitter<any>();

    public submit() {
        this.onsubmit.emit(this.model);
    }
}
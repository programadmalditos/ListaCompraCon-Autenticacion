import { Injectable } from '@angular/core';
import { Producto } from '../../Classes/Producto';


const PRODUCTOS: Array<Producto> = [
    new Producto(1, 'Patatas', 3, 3, 'Para Freir'),
    new Producto(2, 'Huevos', 6, 3, 'Para Freir'),
    new Producto(3, 'Pan', 1, 1, 'Para mojar'),
    new Producto(4, 'Helado', 1, 6, 'Para Postre')

];
const RETRASO = 500;

@Injectable()
export class ListaComraFileService {

    getProductos() {
        return new Promise<Producto[]>(data => {
            setTimeout(() => {
                data(PRODUCTOS);
            }, RETRASO);

        });
    }
}
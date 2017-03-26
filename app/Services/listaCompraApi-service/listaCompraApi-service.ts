import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../../rxjs/index';
import { Producto } from '../../Classes/Producto';

@Injectable()
export class ListaCompraApiService {

    private apiUrl = 'http://apiproductos.azurewebsites.net/api/';

    constructor(private http: Http) { }

    getProductos(): Observable<Producto[]> {

        return this.http.get(this.getUrl('compra'), this.getOptions()).map(this.getDatos).catch(this.error);
    }

    addProducto(model: Producto): Observable<Producto> {
        return this.http.post(this.getUrl('compra'), model, this.getOptions()).map(this.getDatos).catch(this.error);
    }
    removeProducto(model: Producto) {
        return this.http.delete(this.getUrl('compra') + '/' + model.id, this.getOptions()).catch(this.error);
    }
    updateProducto(model: Producto) {
        return this.http.put(this.getUrl('compra'), model, this.getOptions()).catch(this.error);
    }

    private error(error: any) {
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        return Observable.throw(msg);
    }

    private getDatos(data: Response) {
        let datos = data.json();
        return datos || [];
    }
    private getUrl(modelo: String) {
        return this.apiUrl + modelo;
    }
    private getOptions(): RequestOptions {
        let auth = new Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('token') });
        let options = new RequestOptions({ headers: auth });
        return options;

    }
}


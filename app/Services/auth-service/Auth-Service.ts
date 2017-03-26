import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../../rxjs/index';
import { Usuario } from '../../Classes/Usuario';

@Injectable()
export class AuthService {
     private apiUrl = 'http://apiproductos.azurewebsites.net/api/';

     constructor(private http: Http) { }
 
login(Usuario: Usuario): Observable<boolean> {

        let body = 'Login=' + Usuario.Login + '&password=' + Usuario.Password;

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ 'headers': headers });


        return this.http.post(this.getUrl('jwt'), body, options).map(this.getDatos).catch(this.error);
    }
logout(): void {
        sessionStorage.removeItem('token');
    }
private error(error: any) {
        let msg = (error.message) ? error.message : 'Error desconocido';
        console.error(msg);
        Observable.throw(msg);
    }
 private getDatos(data: Response) {
        let datos = data.json();
        if (datos && datos.access_token) {
            sessionStorage.setItem('token',datos.access_token);
            return true;
        }
        return false;
    }
  private getUrl(modelo: String) {
        return this.apiUrl + modelo;
    }

}



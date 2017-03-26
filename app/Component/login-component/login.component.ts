import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth-service/Auth-service';
import { Usuario } from '../../Classes/Usuario';

@Component({
    moduleId: module.id,
    templateUrl: 'login.html',
    selector: 'login'
})

export class LoginComponent implements OnInit {

    model: Usuario = new Usuario();
    error = '';
    loading: boolean = false;

    constructor(
        private router: Router,
        private authenticationService: AuthService) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Credenciales incorrectas';
                    this.loading = false;
                }
            }, e => {
                this.error = 'Credenciales incorrectas';
                this.loading = false;

            });
    }
}
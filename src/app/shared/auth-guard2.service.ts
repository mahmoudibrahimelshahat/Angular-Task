import { AuthService } from 'src/app/shared/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard2 implements CanActivate {
    constructor(public auth:AuthService , public router: Router) { }
    canActivate(): boolean {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['videos']);
            return false;
        }
        return true;
    }
}
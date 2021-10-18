import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private authService: AuthService) { }

  public canActivate(): boolean {
    return this.userLogIn();
  }

  public canLoad(): boolean {
    return this.userLogIn();
  }

  private userLogIn(): boolean {
    if (this.authService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}

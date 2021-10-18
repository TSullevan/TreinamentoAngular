import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAuthModel } from '../models/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  public login(user: UserAuthModel): Observable<any> {
    return this.http.post(`${environment.baseApiUrl}auth`, user, { responseType: 'text' });
  }

  public addTokenToCache(token: string): void {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  public getTokenFromCache(): string {
    return JSON.parse(sessionStorage.getItem('token'));
  }

  public logOut(): void {
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  public getTokenExpirationDate(): Date | null {
    return this.jwtHelper.getTokenExpirationDate(this.getTokenFromCache());
  }

  public isUserLoggedIn(): boolean {
    let token: string = this.getTokenFromCache();
    if (this.isTokenValid(token)) {
      return true;
    }
    this.logOut();
    return false;
  }

  public isTokenValid(token: string): boolean {
    if (token) {
      let decodedToken: string = this.jwtHelper.decodeToken(token);
      if (decodedToken) {
        let isTokenExpired: boolean = this.jwtHelper.isTokenExpired(token);
        if (!isTokenExpired) {
          return true;
        }
      }
    }
  }

  public getRole(): string {
    let token: string = this.getTokenFromCache();
    if(this.isTokenValid(token)) {
      return this.jwtHelper.decodeToken(token).role;
    }
    return '';
  }
}

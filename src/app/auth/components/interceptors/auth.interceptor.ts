import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.includes(`${environment.baseApiUrl}auth`)) {
      return next.handle(request);
    }
    const requestClone = request.clone({setHeaders: {Authorization: `Bearer ${this.authService.getTokenFromCache()}`}});
    return next.handle(requestClone);
  }
}

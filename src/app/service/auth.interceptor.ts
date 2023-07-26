import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private servc: BackendService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let copiedReq: HttpRequest<unknown>;
    if(request.url.includes('login') || request.url.includes('register')) {
      return next.handle(request);
    } else {
      const token = this.servc.getToken();
      console.log(token);
      copiedReq = request.clone({
        headers: request.headers.set(
          'authorization', "Token " + token
        )
      });
      return next.handle(copiedReq);
    }
  }
}

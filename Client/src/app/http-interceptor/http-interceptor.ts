import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../model/auth.service';
import { RestDataSource } from '../model/rest.datasource';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private restDataSource: RestDataSource) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.restDataSource.authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.restDataSource.authToken}`,
        },
      });
    }
    return next.handle(request);
  }
}

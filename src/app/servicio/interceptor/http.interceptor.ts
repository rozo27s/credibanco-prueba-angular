import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable()
export class HttpMasterInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  /**
   * 
   * @param request petición que se intercepta
   * @param next 
   * @returns 
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let data = this.storageService.getLocalStorage(environment.keyData);
    if (!data) {
      return next.handle(request);
    }
    const accessToken =  JSON.parse(data);
    const headers: any = {};
    if (accessToken) {
      headers.Authorization = accessToken.token
    }
    const requestUpdated = request.clone(
      {
        setHeaders: headers
      }
    );
    return next.handle(requestUpdated);
  }
}

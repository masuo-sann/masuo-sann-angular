import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EgoSearchInterceptor implements HttpInterceptor {
    // リクエストの変換処理。ここに共通処理を記述。
    host: string = "https://z-ego-searchman.appspot.com"
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = request.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        const params = request.params.set('mode', 'TEST').set('body', JSON.stringify(request.body));
        const req = request.clone({headers: headers, url: this.host + request.url, params: params});
        return next.handle(req);
    }
}
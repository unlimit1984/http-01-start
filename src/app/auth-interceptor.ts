import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(req.url===...)
    // const modifiedReq = req.clone({url: 'some-new-url'});
    // const modifiedReq = req.clone({headers: req.headers.append('some-key', 'value')});
    // const modifiedReq = req.clone({params: ...});
    const modifiedReq = req.clone({headers: req.headers.append('Auth', 'xyz')});
    return next.handle(modifiedReq);
  }
}

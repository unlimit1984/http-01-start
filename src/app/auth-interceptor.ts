import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(req.url===...)
    console.log('Request is on its way');
    console.log(req.url);
    // const modifiedReq = req.clone({url: 'some-new-url'});
    // const modifiedReq = req.clone({headers: req.headers.append('some-key', 'value')});
    // const modifiedReq = req.clone({params: ...});
    const modifiedReq = req.clone({headers: req.headers.append('Auth', 'xyz')});

    return next.handle(modifiedReq)
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log('Response arrived, body data:');
            console.log(event.body);
          }

        })
      );
  }
}

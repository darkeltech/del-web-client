import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from "@angular/common/http"
import {AuthService} from "./auth.service"
import {Observable} from "rxjs"
import { Injectable } from '@angular/core';
import {tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements  HttpInterceptor{
	constructor(private authService :AuthService){}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		
		
		// this.authService.sbj.subscribe((token)=>{
			
		// })
		
		// return next.do(reqclone)
		// 	.pipe(tap(e=>{
		// 		console.log(e);
		// 	}))
		return next.handle(req).pipe(

			tap((x)=>{
				const reqclone = req.clone({
					//headers: req.headers.append()
				});
				console.log(this.authService.token);
				return next.handle(reqclone);
			})
		)
	}
}
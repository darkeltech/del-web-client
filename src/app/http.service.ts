import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http'
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(url: string, body: any, headers : any = new HttpHeaders({})) : Observable<HttpEvent<any>>{
  		return this.http.post<any>(url, JSON.stringify(body), {headers})
  }
  get(url: string, headers : any = new HttpHeaders({})) : Observable<HttpEvent<any>>{
  		return this.http.get<any>(url, {headers})
  }
  put(url: string, body: any, headers : any = new HttpHeaders({})) : Observable<HttpEvent<any>>{
  		return this.http.put<any>(url, JSON.stringify(body), {headers});
  }
}

import { Injectable } from '@angular/core';
import {Subject} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false
  //sbj = new Subject<string>()
  sbj : string = ""
  token: string = ""
  constructor() { }
  login(){
  	this.isAuth = !this.isAuth
  }
  logout(){
  	this.isAuth = !this.isAuth
  }
}

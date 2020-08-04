import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {AuthService} from "./../auth.service"
import {HttpService} from "./../http.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
  	username: "",
  	password: ""
  }
  host: string = "http://188.242.187.21/auth/login"
  //https://jsonplaceholder.typicode.com/todos
  //"http://188.242.187.21/auth/login"
  constructor(private authService: AuthService, private httpins: HttpService) { }

  ngOnInit(): void {
  }
  pushInToServer(){
  	let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	/*
  	this.http.post<any>("http://188.242.187.21/auth/login", JSON.stringify(this.user), {headers})
  		.subscribe(resp=>{
  			console.log(resp.token)
  			this.authService.sbj.next(resp.token)
  			//this.authService.token = resp.token
  		})
    }*/
    this.httpins.post(this.host, JSON.stringify(this.user), headers)
      .subscribe((resp)=>{
        console.log(resp);
      })
  	//Тестовая секция
    /*
  	setTimeout(()=>{
  		this.authService.token = "NEW TOKEN";
  		console.log(this.authService.token);
  	},3000)
  	*/
  	
	}
}

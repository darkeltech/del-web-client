import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {HttpService} from "./../http.service"
@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent implements OnInit {
  authUser = {nick: "WELL", password: "DONE", faculty: "YES", email: "SOBAKA"}
  host : string = "http://188.242.187.21/auth/register"

  constructor(private httpins: HttpService) { }

  ngOnInit(): void {
  }
  pushInToServer(){
  	let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	//https://jsonplaceholder.typicode.com/todos
  	//http://188.242.187.21/register
   	this.httpins.post(this.host, JSON.stringify(this.authUser), headers)
    	.subscribe((resp)=>{
    		console.log(resp);
    		console.log(document.cookie)
    	})
  }

}

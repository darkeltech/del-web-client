import { Component, OnInit } from '@angular/core';
export interface UserMutable{
	nick: string,
	password: string,
	faculty: string,
	email: string,
	pts: number,
	subsribed: boolean
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  controlBar = {
  	nick: false,
  	password: false,
  	faculty: false,
  	email: false
  }
  controlChangedElem = {
  	nick: false,
  	password: false,
  	faculty: false,
  	email: false
  }
  userMutation : UserMutable = {
  	nick: "Nickname",
  	password: "Password",
  	faculty:"Falucty",
  	email: "Email",
  	pts: 340,
  	subsribed: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

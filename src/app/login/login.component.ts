import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService){
  }

  ngOnInit():void {

  }

  login(form:NgForm){

    const email=form.value.email

    const password=form.value.password

    this.loginService.login(email, password);

  }


}

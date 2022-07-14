import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginDtoReq } from '../../dto/user/login-dto-req';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  loginSubs? : Subscription
  loginDtoReq : LoginDtoReq = new LoginDtoReq();

  constructor(private title : Title, private loginService : LoginService, private router : Router) {
    this.title.setTitle('Login');
  }

  ngOnInit(): void {
    this.loginDtoReq.email = 'ivangrashinton@gmail.com'
    this.loginDtoReq.password = 'VAMC13ND'
  }
  
  onLogin(valid : boolean) : void {
    if(valid){
      this.loginSubs = this.loginService.login(this.loginDtoReq).subscribe(result => {
        this.loginService.saveData(result)
        this.router.navigateByUrl('/home')
      })
    }    
  }

  ngOnDestroy(): void {
    this.loginSubs?.unsubscribe()
  }
}

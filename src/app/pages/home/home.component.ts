import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private title : Title, private loginService : LoginService) {
    this.title.setTitle('Home');
  }

  username : string | undefined = this.loginService.getData()?.username

}

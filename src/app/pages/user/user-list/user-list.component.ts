import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModelDto } from '../../../dto/user/user-model-dto';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy {

  userSubsGetAll? : Subscription
  userSubsDelete? : Subscription
  idDeleted! : number
  users? : UserModelDto[] = []

  constructor(private title : Title, private userService : UserService, private router : Router) {
    this.title.setTitle('User List');
  }

  ngOnInit(): void {
    this.fill()
  }

  fill() : void {
    this.userSubsGetAll = this.userService.getAll().subscribe(result=>{
      this.users = result.data
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/user/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.userSubsDelete = this.userService.delete(this.idDeleted).subscribe(result=>{
      this.fill()
    })
  }

  ngOnDestroy(): void {
    this.userSubsDelete?.unsubscribe()
    this.userSubsGetAll?.unsubscribe()
  }
}

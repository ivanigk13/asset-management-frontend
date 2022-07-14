import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleModelDto } from '../../../dto/role/role-model-dto';
import { InsertUserDtoReq } from '../../../dto/user/insert-user-dto-req';
import { UpdateUserDtoReq } from '../../../dto/user/update-user-dto-req';
import { RoleService } from '../../../service/role.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.css']
})
export class UserSaveComponent implements OnInit,OnDestroy {

  roleSubsGetAll? : Subscription
  userSubsInsert? : Subscription
  roles? : RoleModelDto[] = []

  insertUserDtoReq : InsertUserDtoReq = new InsertUserDtoReq()
  updateUserDtoReq : UpdateUserDtoReq = new UpdateUserDtoReq()

  constructor(private title : Title, private roleService : RoleService, private userService : UserService,
              private router : Router) {
    this.title.setTitle('Save User');
  }

  ngOnInit(): void {
    this.roleSubsGetAll = this.roleService.getAll().subscribe(result=>{
      this.roles = result.data
    })
  }  

  save(valid : boolean) : void {
    if(valid){
      this.userSubsInsert = this.userService.insert(this.insertUserDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/user/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.userSubsInsert?.unsubscribe()
    this.roleSubsGetAll?.unsubscribe()
  }
  
}

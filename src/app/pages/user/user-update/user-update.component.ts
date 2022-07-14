import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleModelDto } from '../../../dto/role/role-model-dto';
import { UpdateUserDtoReq } from '../../../dto/user/update-user-dto-req';
import { RoleService } from '../../../service/role.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit,OnDestroy {

  roleSubsGetAll? : Subscription
  userSubsGetById? : Subscription
  userSubsUpdate? : Subscription

  roles? : RoleModelDto[] = []
  updateUserDtoReq : UpdateUserDtoReq = new UpdateUserDtoReq()

  constructor(private title : Title, private userService : UserService, private router : Router,
              private activedRoute : ActivatedRoute, private roleService : RoleService) {
    this.title.setTitle('Update User')
  }

  ngOnInit(): void {
    this.roleSubsGetAll = this.roleSubsGetAll = this.roleService.getAll().subscribe(result=>{
      this.roles = result.data
    })
    this.userSubsGetById = this.activedRoute.params.subscribe(result=>{
      this.userService.getById((result as any).id).subscribe(result=>{
        this.updateUserDtoReq.id = result.data.id
        this.updateUserDtoReq.roleId = result.data.roleId
        this.updateUserDtoReq.username = result.data.username
        this.updateUserDtoReq.password = result.data.password
        this.updateUserDtoReq.version = result.data.version
        this.updateUserDtoReq.isActive = result.data.isActive
      })
    })
  }

  update(valid : boolean) {
    if(valid){
      this.userSubsUpdate = this.userService.update(this.updateUserDtoReq).subscribe(result=>{
        if(result.data.version) this.router.navigateByUrl('/user/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.roleSubsGetAll?.unsubscribe()
    this.userSubsGetById?.unsubscribe()
    this.userSubsUpdate?.unsubscribe()
  }

}

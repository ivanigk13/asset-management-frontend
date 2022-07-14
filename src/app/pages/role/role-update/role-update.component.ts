import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { updateRoleAction } from '../../../state/role/role.action';
import { UpdateRoleDtoReq } from '../../../dto/role/update-role-dto-req';
import { RoleService }      from '../../../service/role.service';
import { roleSelectById, roleSelectUpdate }   from '../../../state/role/role.selector';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})

export class RoleUpdateComponent implements OnInit, OnDestroy {

  roleSubsGetById? : Subscription
  roleSubsUpdate? : Subscription
  roleStoreUpdate? : Subscription
  updateRoleDtoReq : UpdateRoleDtoReq = new UpdateRoleDtoReq()

  constructor(private title : Title, private roleService : RoleService, private router : Router,
            private activedRoute : ActivatedRoute, private store : Store) { 
      this.title.setTitle('Update Role')
  }

  ngOnInit(): void {
    this.roleSubsGetById = this.activedRoute.params.subscribe(result=>{
      this.store.select(roleSelectById((result as any).id)).subscribe(result=>{
        const resultUpdate = {...result}
        this.updateRoleDtoReq = new UpdateRoleDtoReq()
        this.updateRoleDtoReq.id = resultUpdate.id
        this.updateRoleDtoReq.roleName = resultUpdate.roleName
        this.updateRoleDtoReq.version = resultUpdate.version
      })
    })
    
  }

  update(valid : boolean) {
    if(valid){
      this.store.dispatch(updateRoleAction({payload:this.updateRoleDtoReq}))
      this.roleStoreUpdate = this.store.select(roleSelectUpdate).subscribe(result=>{
        if(result) this.router.navigateByUrl('/role/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.roleSubsUpdate?.unsubscribe()
    this.roleSubsGetById?.unsubscribe()
    this.roleStoreUpdate?.unsubscribe()
  }

}

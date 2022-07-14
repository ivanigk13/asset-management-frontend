import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RoleModelDto } from '../../../dto/role/role-model-dto';
import { RoleService } from '../../../service/role.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { roleSelectAll, roleSelectInit } from '../../../state/role/role.selector';
import { deleteRoleAction, loadRoleAction } from '../../../state/role/role.action';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent implements OnInit, OnDestroy {

  idDeleted! : number
  roleSubsGetAll? : Subscription
  roleSubsDelete? : Subscription
  roleStoreSubs? : Subscription
  roles$ : Observable<RoleModelDto[]> = this.store.select(roleSelectAll)
  roles : RoleModelDto[] = []
  
  constructor(private title : Title, private roleService : RoleService, private router : Router,
              private store : Store) {
    this.title.setTitle('Role List');
  }

  ngOnInit(): void {
    this.roleStoreSubs = this.store.select(roleSelectInit).subscribe(result=>{
      if(!result){
        this.store.dispatch(loadRoleAction())
      }
    })
  }

  fill() : void {
    this.roleSubsGetAll = this.roleService.getAll().subscribe(result=>{
      this.roles = {...result.data}
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/role/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.store.dispatch(deleteRoleAction({ payload:this.idDeleted}))
  }

  ngOnDestroy(): void {
    this.roleSubsGetAll?.unsubscribe()
    this.roleSubsDelete?.unsubscribe()
    this.roleStoreSubs?.unsubscribe()
  }

}

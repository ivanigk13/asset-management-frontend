import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { InsertRoleDtoReq } from '../../../dto/role/insert-role-dto-req';
import { insertRoleAction } from '../../../state/role/role.action';
import { roleSelectInsert } from '../../../state/role/role.selector';


@Component({
  selector: 'app-role-save',
  templateUrl: './role-save.component.html',
  styleUrls: ['./role-save.component.css']
})
export class RoleSaveComponent implements OnInit,OnDestroy {

  roleSubsInsert? : Subscription
  insertRoleDtoReq : InsertRoleDtoReq = new InsertRoleDtoReq()

  constructor(private title : Title, private router : Router, private store : Store) {
    this.title.setTitle('Save Role');
  }

  ngOnInit(): void {

  }

  save(valid : boolean) : void {
    if(valid){
      this.store.dispatch(insertRoleAction({payload:this.insertRoleDtoReq}))
      this.roleSubsInsert = this.store.select(roleSelectInsert).subscribe(result=>{
        if(result) this.router.navigateByUrl('/role/list')
      })
      // roleService.insert(this.insertRoleDtoReq).subscribe(result=>{
      //   if(result.data.id) console.log('berhasil')
      //   else console.log('gagal')
      //   this.router.navigateByUrl('/role/list')
      // })
    }
  }

  ngOnDestroy(): void {
    this.roleSubsInsert?.unsubscribe()
  }

}

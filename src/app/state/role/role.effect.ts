import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { RoleModelDto } from "../../dto/role/role-model-dto";
import { UpdateRoleDtoReq } from "../../dto/role/update-role-dto-req";
import { RoleService } from "../../service/role.service";
import { deleteRoleAction, deleteRoleSuccessAction, insertRoleAction, insertRoleSuccessAction, loadRoleAction, loadRoleSuccessAction, updateRoleAction, updateRoleSuccessAction } from "./role.action";

@Injectable()
export class RoleEffect {
    
    loadRoleEffect = createEffect(()=>
        this.action$.pipe(
            ofType(loadRoleAction),
            mergeMap(
                ()=>this.roleService.getAll().pipe(
                    map(result=>loadRoleSuccessAction({ payload:result.data }))
                )
            )
        )
    )

    insertRoleEffect = createEffect(() =>
        this.action$.pipe(
            ofType(insertRoleAction),
            mergeMap(
                ({payload}) => this.roleService.insert(payload).pipe(
                    map(result => {
                        const newPayload : RoleModelDto = new RoleModelDto()
                        newPayload.id = result.data.id
                        newPayload.roleCode = payload.roleCode
                        newPayload.roleName = payload.roleName
                        newPayload.version = 0
                        newPayload.isActive = true
                        return insertRoleSuccessAction({ payload:newPayload })
                    })
                )
            )
        )
    )

    updateRoleEffect = createEffect(() =>
        this.action$.pipe(
            ofType(updateRoleAction),
            mergeMap(
                ({payload}) => this.roleService.update(payload).pipe(
                    map(result => {
                        const newPayload : UpdateRoleDtoReq = {...payload}
                        newPayload.version = result.data.version
                        return updateRoleSuccessAction({ payload: newPayload })
                    })
                )
            )
        )
    )

    deleteRoleEffect = createEffect(() =>
    this.action$.pipe(
        ofType(deleteRoleAction),
        mergeMap(
            ({payload}) => this.roleService.delete(payload).pipe(
                map(result => {
                    return deleteRoleSuccessAction({ payload })
                })
            )
        )
    )
)

    constructor(private action$ : Actions, private roleService : RoleService){}
}
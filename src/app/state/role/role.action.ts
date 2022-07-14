import { createAction, props } from '@ngrx/store'
import { UpdateRoleDtoReq } from '../../dto/role/update-role-dto-req'
import { RoleModelDto } from '../../dto/role/role-model-dto'
import { InsertRoleDtoReq } from '../../dto/role/insert-role-dto-req'

const loadRoleAction = createAction(
    '[Role Page] Role'
)
const loadRoleSuccessAction = createAction(
    '[Role Page] Role Success',
    props<{payload:RoleModelDto[]}>()
)
const insertRoleAction = createAction(
    '[Role Page] insert Role',
    props<{ payload: InsertRoleDtoReq }>()
)
const insertRoleSuccessAction = createAction(
    '[Role Page] insert Role success',
    props<{ payload: RoleModelDto }>()
)
const updateRoleAction = createAction(
    '[Role Page] update Role',
    props<{ payload: UpdateRoleDtoReq }>()
)
const updateRoleSuccessAction = createAction(
    '[Role Page] update Role success',
    props<{ payload: UpdateRoleDtoReq }>()
)
const deleteRoleAction = createAction(
    '[Role Page] delete Role',
    props<{ payload: number }>()
)
const deleteRoleSuccessAction = createAction(
    '[Role Page] delete Role success',
    props<{ payload: number }>()
)

export {loadRoleAction,loadRoleSuccessAction,
        insertRoleAction, insertRoleSuccessAction,
        updateRoleAction,updateRoleSuccessAction,
        deleteRoleAction,deleteRoleSuccessAction}
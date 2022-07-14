import { createReducer, on } from "@ngrx/store";
import { RoleModelDto } from "../../dto/role/role-model-dto";
import { deleteRoleSuccessAction, insertRoleSuccessAction, loadRoleSuccessAction, updateRoleSuccessAction } from "./role.action";

const roleModelDto : RoleModelDto[] = []

const initState = {
    payload : roleModelDto,
    init : false,
    insert : false,
    update: false
}

export const roleReducer = createReducer(
    initState,
    on(loadRoleSuccessAction, (state, {payload}) =>{
        return {...state, payload, init: true}
    }),
    on(insertRoleSuccessAction, (state, { payload } ) => {
        const newPayload = [...state.payload]
        newPayload.push(payload)
        return {...state, payload : newPayload, insert : true, update : false}
    }),
    on(updateRoleSuccessAction, (state, { payload } ) => {
        const newState = state.payload.map(role => {
            let newRole = {...role}
            if(role.id == payload.id){
                newRole.id = payload.id
                newRole.roleName = payload.roleName
                newRole.version = payload.version
            }
            return newRole
        })

        return {...state, payload : newState, insert : false, update : true}
    }),
    on(deleteRoleSuccessAction, (state, { payload } ) => {
        const newData = state.payload.filter(role => role.id != payload)
        return {...state, payload : newData, insert : false, update:false}
    })
)
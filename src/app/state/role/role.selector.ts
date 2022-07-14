import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoleModelDto } from "../../dto/role/role-model-dto";

const roleStore : string = 'role'
const roleSelectInit = createSelector(
    createFeatureSelector(roleStore),
    (state : {init : boolean }) => state.init
)
const roleSelectInsert = createSelector(
    createFeatureSelector(roleStore),
    (state : {insert : boolean }) => state.insert
)
const roleSelectUpdate = createSelector(
    createFeatureSelector(roleStore),
    (state : {update : boolean }) => state.update
)
const roleSelectAll = createSelector(
    createFeatureSelector(roleStore),
    (state : {payload : RoleModelDto[] }) => state.payload
)
const roleSelectById = (id : number) => createSelector(
    createFeatureSelector(roleStore),
    (state : {payload : RoleModelDto[] }) => {
        const newData = state.payload.filter(role => role.id == id)
        return newData[0]
    }
)
const roleSelectUpdateId = (id : number) => createSelector(
    createFeatureSelector(roleStore),
    (state : {payload : RoleModelDto[] }) => {
        const newData = state.payload.filter(role => role.id == id)
        return newData[0]
    }
)

export {roleSelectInit, roleSelectInsert, roleSelectUpdate, roleSelectAll, roleSelectById, roleSelectUpdateId}
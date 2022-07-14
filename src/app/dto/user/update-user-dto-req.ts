export class UpdateUserDtoReq {
	id!: number
	version!: number
	roleId!: number
	username!: string
	password!: string
	isActive!: boolean
}
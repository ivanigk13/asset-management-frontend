import { EmployeeModelDto } from "./employee-model-dto"

export class GetAllEmployeeDto {
	msg?: string
	data!: EmployeeModelDto[]
}
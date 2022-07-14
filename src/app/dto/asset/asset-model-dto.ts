export class AssetModelDto {
	id!: number
	version!: number
	companyId! : number;
	brandId! : number;
	typeId! : number;
	statusId! : number;
	fileId! : number;
	companyName!: string
	brandName!: string
	typeName!: string
	statusName!: string
	assetName!: string
	serial!: string
	assetDescription!: string
	invoice!: string
	isActive!: boolean
	expired!: string
}
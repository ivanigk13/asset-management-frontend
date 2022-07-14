export class UpdateAssetDtoReq {
	id!: number
	version!: number
	companyId!: number
	assetTypeId!: number
	assetStatusId!: number
	brandId!: number
	fileId! : number
	assetName!: string
	serial!: string
	assetDescription!: string
	invoice!: string
	expired?: string
}
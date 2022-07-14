export class CheckoutModelDto {
	id!: number
	version!: number
	assetName?: string
	employeeName?: string
	otherAssetName?: string
	place!: string
	isActive!: boolean
	expired?: string
}
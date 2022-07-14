import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetStatusModelDto } from '../../../dto/asset-status/asset-status-model-dto';
import { AssetTypeModelDto } from '../../../dto/asset-type/asset-type-model-dto';
import { UpdateAssetDtoReq } from '../../../dto/asset/update-asset-dto-req';
import { BrandModelDto } from '../../../dto/brand/brand-model-dto';
import { CompanyModelDto } from '../../../dto/company/company-model-dto';
import { AssetStatusService } from '../../../service/asset-status.service';
import { AssetTypeService } from '../../../service/asset-type.service';
import { AssetService } from '../../../service/asset.service';
import { BrandService } from '../../../service/brand.service';
import { CompanyService } from '../../../service/company.service';

@Component({
  selector: 'app-asset-update',
  templateUrl: './asset-update.component.html',
  styleUrls: ['./asset-update.component.css']
})
export class AssetUpdateComponent implements OnInit,OnDestroy {

  file? : File

  companySubs? : Subscription
  typeSubs? : Subscription
  statusSubs? : Subscription
  brandSubs? : Subscription
  assetSubsGetById? : Subscription
  assetSubsUpdate? : Subscription

  companies? : CompanyModelDto[] = []
  assetTypes? : AssetTypeModelDto[] = []
  assetStatuses? : AssetStatusModelDto[] = []
  brands? : BrandModelDto[] = []

  updateAssetDtoReq : UpdateAssetDtoReq = new UpdateAssetDtoReq()

  constructor(private title : Title, private companyService : CompanyService, 
    private assetTypeService : AssetTypeService, private assetStatusService : AssetStatusService,
    private brandService : BrandService, private assetService : AssetService, private router : Router,
    private activedRoute : ActivatedRoute) {
    this.title.setTitle('Update Asset')
  }

  ngOnInit(): void {
    this.companySubs = this.companyService.getAll().subscribe(result=>{
      this.companies = result.data
    })
    this.typeSubs = this.assetTypeService.getAll().subscribe(result=>{
      this.assetTypes = result.data
    })
    this.statusSubs = this.assetStatusService.getAll().subscribe(result=>{
      this.assetStatuses = result.data
    })
    this.brandSubs = this.brandService.getAll().subscribe(result=>{
      this.brands = result.data
    })
    this.assetSubsGetById = this.activedRoute.params.subscribe(result=>{
      this.assetService.getById((result as any).id).subscribe(result=>{
        this.updateAssetDtoReq.id = result.data.id
        this.updateAssetDtoReq.assetDescription = result.data.assetDescription
        this.updateAssetDtoReq.assetName = result.data.assetName
        this.updateAssetDtoReq.assetStatusId = result.data.statusId
        this.updateAssetDtoReq.assetTypeId = result.data.typeId
        this.updateAssetDtoReq.brandId = result.data.brandId
        this.updateAssetDtoReq.companyId = result.data.companyId
        this.updateAssetDtoReq.fileId = result.data.fileId
        this.updateAssetDtoReq.assetName = result.data.assetName
        this.updateAssetDtoReq.serial = result.data.serial
        this.updateAssetDtoReq.invoice = result.data.invoice
        this.updateAssetDtoReq.expired = result.data.expired
        this.updateAssetDtoReq.version = result.data.version
      })
    })
  }

  update(valid : boolean) {
    if(valid){
      this.assetSubsUpdate = this.assetService.update(this.updateAssetDtoReq, this.file).subscribe(result=>{
        if(result.data.version) this.router.navigateByUrl('/asset/list')
      })
    }
  }

  changeFile(event : any) : void {
    this.file = event.target.files[0]
  }

  ngOnDestroy(): void {
    this.companySubs?.unsubscribe()
    this.typeSubs?.unsubscribe()
    this.statusSubs?.unsubscribe()
    this.brandSubs?.unsubscribe()
    this.assetSubsGetById?.unsubscribe()
    this.assetSubsUpdate?.unsubscribe() 
  }
}

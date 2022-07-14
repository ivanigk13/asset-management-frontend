import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AssetStatusModelDto } from '../../../dto/asset-status/asset-status-model-dto';
import { AssetTypeModelDto } from '../../../dto/asset-type/asset-type-model-dto';
import { InsertAssetDtoReq } from '../../../dto/asset/insert-asset-dto-req';
import { BrandModelDto } from '../../../dto/brand/brand-model-dto';
import { CompanyModelDto } from '../../../dto/company/company-model-dto';
import { AssetStatusService } from '../../../service/asset-status.service';
import { AssetTypeService } from '../../../service/asset-type.service';
import { AssetService } from '../../../service/asset.service';
import { BrandService } from '../../../service/brand.service';
import { CompanyService } from '../../../service/company.service';

@Component({
  selector: 'app-asset-save',
  templateUrl: './asset-save.component.html',
  styleUrls: ['./asset-save.component.css']
})
export class AssetSaveComponent implements OnInit {

  file? : File
  companies? : CompanyModelDto[] = []
  assetTypes? : AssetTypeModelDto[] = []
  assetStatuses? : AssetStatusModelDto[] = []
  brands? : BrandModelDto[] = []

  insertAssetDtoReq : InsertAssetDtoReq = new InsertAssetDtoReq()
  
  constructor(private title : Title, private companyService : CompanyService, 
        private assetTypeService : AssetTypeService, private assetStatusService : AssetStatusService,
        private brandService : BrandService, private assetService : AssetService, private router : Router) {
          this.title.setTitle('Save Asset');
  }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(result=>{
      this.companies = result.data
    })
    this.assetTypeService.getAll().subscribe(result=>{
      this.assetTypes = result.data
    })
    this.assetStatusService.getAll().subscribe(result=>{
      this.assetStatuses = result.data
    })
    this.brandService.getAll().subscribe(result=>{
      this.brands = result.data
    })
  }

  save(valid : boolean) : void {
    if(valid){
      this.assetService.insert(this.insertAssetDtoReq, this.file).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/asset/list')
      })
    }
  }

  changeFile(event : any) : void {
    this.file = event.target.files[0]
  }

}

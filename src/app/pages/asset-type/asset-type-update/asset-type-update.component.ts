import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateAssetTypeDtoReq } from '../../../dto/asset-type/update-asset-type-dto-req';
import { AssetTypeService } from '../../../service/asset-type.service';

@Component({
  selector: 'app-asset-type-update',
  templateUrl: './asset-type-update.component.html',
  styleUrls: ['./asset-type-update.component.css']
})
export class AssetTypeUpdateComponent implements OnInit,OnDestroy {

  typeSubsGetById? : Subscription
  typeSubsUpdate? : Subscription
  updateAssetTypeDtoReq : UpdateAssetTypeDtoReq = new UpdateAssetTypeDtoReq()

  constructor(private title : Title, private assetTypeService : AssetTypeService, private router : Router,
              private activedRoute : ActivatedRoute) {
    this.title.setTitle('Update Asset Type')
  }

  ngOnInit(): void {
    this.typeSubsGetById = this.activedRoute.params.subscribe(result=>{
      this.assetTypeService.getById((result as any).id).subscribe(result=>{
        this.updateAssetTypeDtoReq.id = result.data.id
        this.updateAssetTypeDtoReq.typeName = result.data.typeName
        this.updateAssetTypeDtoReq.version = result.data.version
      })
    })
  }

  update(valid : boolean) {
    if(valid){
      this.typeSubsUpdate = this.assetTypeService.update(this.updateAssetTypeDtoReq).subscribe(result=>{
        if(result.data.version) this.router.navigateByUrl('/asset-type/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.typeSubsGetById?.unsubscribe()
    this.typeSubsUpdate?.unsubscribe()
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateAssetStatusDtoReq } from '../../../dto/asset-status/update-asset-status-dto-req';
import { AssetStatusService } from '../../../service/asset-status.service';

@Component({
  selector: 'app-asset-status-update',
  templateUrl: './asset-status-update.component.html',
  styleUrls: ['./asset-status-update.component.css']
})
export class AssetStatusUpdateComponent implements OnInit,OnDestroy {
  
  statusSubsGetById? : Subscription
  statusSubsUpdate? : Subscription
  updateAssetStatusDtoReq : UpdateAssetStatusDtoReq = new UpdateAssetStatusDtoReq()

  constructor(private title : Title, private assetStatusService : AssetStatusService, private router : Router,
              private activedRoute : ActivatedRoute) {
    this.title.setTitle('Update Asset Status')
  }

  ngOnInit(): void {
    this.statusSubsGetById = this.activedRoute.params.subscribe(result=>{
      this.assetStatusService.getById((result as any).id).subscribe(result=>{
        this.updateAssetStatusDtoReq.id = result.data.id
        this.updateAssetStatusDtoReq.statusName = result.data.statusName
        this.updateAssetStatusDtoReq.altName = result.data.altName
        this.updateAssetStatusDtoReq.version = result.data.version
      })
    })
  }

  update(valid : boolean) {
    if(valid){
      this.statusSubsUpdate = this.assetStatusService.update(this.updateAssetStatusDtoReq).subscribe(result=>{
        if(result.data.version) this.router.navigateByUrl('/asset-status/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.statusSubsGetById?.unsubscribe()
    this.statusSubsUpdate?.unsubscribe()
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InsertAssetStatusDtoReq } from '../../../dto/asset-status/insert-asset-status-dto-req';
import { AssetStatusService } from '../../../service/asset-status.service';

@Component({
  selector: 'app-asset-status-save',
  templateUrl: './asset-status-save.component.html',
  styleUrls: ['./asset-status-save.component.css']
})
export class AssetStatusSaveComponent implements OnInit,OnDestroy {

  statusSubsInsert? : Subscription
  insertAssetStatusDtoReq :InsertAssetStatusDtoReq = new InsertAssetStatusDtoReq()

  constructor(private title : Title, private assetStatusService : AssetStatusService, private router : Router) {
    this.title.setTitle('Save Asset Status');
  }

  ngOnInit(): void {
  }

  save(valid : boolean) : void {
    if(valid){
      this.statusSubsInsert = this.assetStatusService.insert(this.insertAssetStatusDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/asset-status/list')
      })
    }
  }

  ngOnDestroy(): void {
    this.statusSubsInsert?.unsubscribe()
  }
}

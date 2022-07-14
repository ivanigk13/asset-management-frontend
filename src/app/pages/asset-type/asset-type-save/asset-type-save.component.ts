import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InsertAssetTypeDtoReq } from '../../../dto/asset-type/insert-asset-type-dto-req';
import { UpdateAssetTypeDtoReq } from '../../../dto/asset-type/update-asset-type-dto-req';
import { AssetTypeService } from '../../../service/asset-type.service';

@Component({
  selector: 'app-asset-type-save',
  templateUrl: './asset-type-save.component.html',
  styleUrls: ['./asset-type-save.component.css']
})
export class AssetTypeSaveComponent implements OnInit,OnDestroy {

  typeSubsInsert? : Subscription
  insertAssetTypeDtoReq : InsertAssetTypeDtoReq = new InsertAssetTypeDtoReq()
  
  constructor(private title : Title, private assetTypeService : AssetTypeService, private router : Router) {
    this.title.setTitle('Save Asset Type');
  }

  ngOnInit(): void {
  }

  save(valid : boolean) : void {
    if(valid){
      this.typeSubsInsert = this.assetTypeService.insert(this.insertAssetTypeDtoReq).subscribe(result=>{
        if(result.data.id) this.router.navigateByUrl('/asset-type/list')
      })
    }
  }
  
  ngOnDestroy(): void {
    this.typeSubsInsert?.unsubscribe()
  }
}

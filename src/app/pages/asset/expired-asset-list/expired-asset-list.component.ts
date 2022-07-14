import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AssetModelDto } from '../../../dto/asset/asset-model-dto';
import { AssetService } from '../../../service/asset.service';

@Component({
  selector: 'app-expired-asset-list',
  templateUrl: './expired-asset-list.component.html',
  styleUrls: ['./expired-asset-list.component.css']
})
export class ExpiredAssetListComponent implements OnInit,OnDestroy {

  assetSubsExpired? : Subscription
  assets? : AssetModelDto[]

  constructor(private title : Title, private assetService : AssetService) {
    this.title.setTitle('Expired Asset List');
  }

  ngOnInit(): void {
    this.assetSubsExpired = this.assetService.getAllExpired().subscribe(result=>{
      this.assets = result.data
    })
  }

  ngOnDestroy(): void {
    this.assetSubsExpired?.unsubscribe()
  }
}

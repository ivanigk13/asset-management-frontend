import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetStatusModelDto } from '../../../dto/asset-status/asset-status-model-dto';
import { AssetStatusService } from '../../../service/asset-status.service';

@Component({
  selector: 'app-asset-status-list',
  templateUrl: './asset-status-list.component.html',
  styleUrls: ['./asset-status-list.component.css']
})
export class AssetStatusListComponent implements OnInit,OnDestroy {

  statusSubsGetAll? : Subscription
  statusSubsDelete? : Subscription
  idDeleted! : number
  assetStatuses? : AssetStatusModelDto[] = []

  constructor(private title : Title, private assetStatusService : AssetStatusService, private router : Router) {
    this.title.setTitle('Asset Status List');
  }

  ngOnInit(): void {
    this.fill()
  }

  fill() : void {
    this.statusSubsGetAll = this.assetStatusService.getAll().subscribe(result=>{
      this.assetStatuses = result.data
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/asset-status/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.statusSubsDelete = this.assetStatusService.delete(this.idDeleted).subscribe(result=>{
      if(result.msg) this.fill()
    })
  }

  ngOnDestroy(): void {
    this.statusSubsGetAll?.unsubscribe()
    this.statusSubsDelete?.unsubscribe()
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AssetTypeModelDto } from '../../../dto/asset-type/asset-type-model-dto';
import { AssetTypeService } from '../../../service/asset-type.service';

@Component({
  selector: 'app-asset-type-list',
  templateUrl: './asset-type-list.component.html',
  styleUrls: ['./asset-type-list.component.css']
})
export class AssetTypeListComponent implements OnInit,OnDestroy {

  typeSubsGetAll? : Subscription
  typeSubsDelete? : Subscription
  idDeleted! : number
  assetTypes? : AssetTypeModelDto[] = []

  constructor(private title : Title, private assetTypeService : AssetTypeService, private router : Router) {
    this.title.setTitle('Asset Type List');
  }

  ngOnInit(): void {
    this.fill()
  }

  fill() : void {
    this.typeSubsGetAll = this.assetTypeService.getAll().subscribe(result=>{
      this.assetTypes = result.data
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/asset-type/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.typeSubsDelete = this.assetTypeService.delete(this.idDeleted).subscribe(result=>{
      if(result.msg) this.fill()
    })
  }

  ngOnDestroy(): void {
    this.typeSubsGetAll?.unsubscribe()
    this.typeSubsDelete?.unsubscribe()
  }
}

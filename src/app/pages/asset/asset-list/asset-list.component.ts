import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AssetModelDto } from '../../../dto/asset/asset-model-dto';
import { AssetService } from '../../../service/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  
  idDeleted! : number
  assets? : AssetModelDto[] = []

  constructor(private title : Title, private assetService : AssetService, private router : Router) {
    this.title.setTitle('Asset List');
  }

  ngOnInit(): void {
    this.fill()
  }

  fill() : void {
    this.assetService.getAll().subscribe(result=>{
      this.assets = result.data
    })
  }

  update(id : number) : void {
    this.router.navigateByUrl('/asset/'+id)
  }

  delete(id : number) : void {
    this.idDeleted = id
  }

  doDelete() : void {
    this.assetService.delete(this.idDeleted).subscribe(result=>{
      if(result.msg) this.fill()
    })
  }

}

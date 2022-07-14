import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CheckinModelDto } from '../../../dto/checkin/checkin-model-dto';
import { CheckinService } from '../../../service/checkin.service';

@Component({
  selector: 'app-checkin-list',
  templateUrl: './checkin-list.component.html',
  styleUrls: ['./checkin-list.component.css']
})
export class CheckinListComponent implements OnInit,OnDestroy {

  checkins? : CheckinModelDto[] = []
  checkinSubs? : Subscription

  constructor(private title : Title, private checkinService : CheckinService) {
    this.title.setTitle('Checkin List');
  }

  ngOnInit(): void {
    this.checkinSubs = this.checkinService.getAll().subscribe(result=>{
      this.checkins = result.data
    })
  }

  ngOnDestroy(): void {
    this.checkinSubs?.unsubscribe()
  }
}

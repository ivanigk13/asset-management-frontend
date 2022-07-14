import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredAssetListComponent } from './expired-asset-list.component';

describe('ExpiredAssetListComponent', () => {
  let component: ExpiredAssetListComponent;
  let fixture: ComponentFixture<ExpiredAssetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredAssetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredAssetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

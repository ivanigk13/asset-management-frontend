import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetStatusListComponent } from './asset-status-list.component';

describe('AssetStatusListComponent', () => {
  let component: AssetStatusListComponent;
  let fixture: ComponentFixture<AssetStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

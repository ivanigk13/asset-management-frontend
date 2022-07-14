import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetStatusUpdateComponent } from './asset-status-update.component';

describe('AssetStatusUpdateComponent', () => {
  let component: AssetStatusUpdateComponent;
  let fixture: ComponentFixture<AssetStatusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetStatusUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetStatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

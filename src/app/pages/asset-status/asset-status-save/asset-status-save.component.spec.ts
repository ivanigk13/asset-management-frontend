import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetStatusSaveComponent } from './asset-status-save.component';

describe('AssetStatusSaveComponent', () => {
  let component: AssetStatusSaveComponent;
  let fixture: ComponentFixture<AssetStatusSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetStatusSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetStatusSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

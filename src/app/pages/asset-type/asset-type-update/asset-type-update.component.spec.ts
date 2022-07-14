import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeUpdateComponent } from './asset-type-update.component';

describe('AssetTypeUpdateComponent', () => {
  let component: AssetTypeUpdateComponent;
  let fixture: ComponentFixture<AssetTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTypeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

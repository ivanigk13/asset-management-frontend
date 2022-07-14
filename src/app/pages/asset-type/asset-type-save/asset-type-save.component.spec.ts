import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeSaveComponent } from './asset-type-save.component';

describe('AssetTypeSaveComponent', () => {
  let component: AssetTypeSaveComponent;
  let fixture: ComponentFixture<AssetTypeSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTypeSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTypeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

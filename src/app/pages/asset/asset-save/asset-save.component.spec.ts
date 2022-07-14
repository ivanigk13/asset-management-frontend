import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSaveComponent } from './asset-save.component';

describe('AssetSaveComponent', () => {
  let component: AssetSaveComponent;
  let fixture: ComponentFixture<AssetSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

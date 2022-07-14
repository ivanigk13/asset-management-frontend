import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSaveComponent } from './checkout-save.component';

describe('CheckoutSaveComponent', () => {
  let component: CheckoutSaveComponent;
  let fixture: ComponentFixture<CheckoutSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

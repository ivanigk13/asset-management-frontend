import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutUncheckinComponent } from './checkout-uncheckin.component';

describe('CheckoutUncheckinComponent', () => {
  let component: CheckoutUncheckinComponent;
  let fixture: ComponentFixture<CheckoutUncheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutUncheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutUncheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredCheckoutListComponent } from './expired-checkout-list.component';

describe('ExpiredCheckoutListComponent', () => {
  let component: ExpiredCheckoutListComponent;
  let fixture: ComponentFixture<ExpiredCheckoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredCheckoutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredCheckoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

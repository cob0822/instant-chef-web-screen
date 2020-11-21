import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailContentComponent } from './order-detail-content.component';

describe('OrderDetailContentComponent', () => {
  let component: OrderDetailContentComponent;
  let fixture: ComponentFixture<OrderDetailContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTitleContentComponent } from './order-title-content.component';

describe('OrderTitleContentComponent', () => {
  let component: OrderTitleContentComponent;
  let fixture: ComponentFixture<OrderTitleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTitleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTitleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

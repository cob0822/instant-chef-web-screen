import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeTagComponent } from './edge-tag.component';

describe('EdgeTagComponent', () => {
  let component: EdgeTagComponent;
  let fixture: ComponentFixture<EdgeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

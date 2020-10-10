import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneInputFormComponent } from './clone-input-form.component';

describe('CloneInputFormComponent', () => {
  let component: CloneInputFormComponent;
  let fixture: ComponentFixture<CloneInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

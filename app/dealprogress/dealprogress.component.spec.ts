import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealprogressComponent } from './dealprogress.component';

describe('DealprogressComponent', () => {
  let component: DealprogressComponent;
  let fixture: ComponentFixture<DealprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

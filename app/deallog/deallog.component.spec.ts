import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeallogComponent } from './deallog.component';

describe('DeallogComponent', () => {
  let component: DeallogComponent;
  let fixture: ComponentFixture<DeallogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeallogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeallogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

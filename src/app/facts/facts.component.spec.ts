import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactComponent } from './fact.component';

describe('FactComponent', () => {
  let component: FactComponent;
  let fixture: ComponentFixture<FactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

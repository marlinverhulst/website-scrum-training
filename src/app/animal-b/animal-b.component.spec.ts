import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBComponent } from './animal-b.component';

describe('AnimalBComponent', () => {
  let component: AnimalBComponent;
  let fixture: ComponentFixture<AnimalBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

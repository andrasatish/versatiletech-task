import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepFilterComponent } from './deep-filter.component';

describe('DeepFilterComponent', () => {
  let component: DeepFilterComponent;
  let fixture: ComponentFixture<DeepFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

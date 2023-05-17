import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridBasicComponent } from './ag-grid-basic.component';

describe('AgGridBasicComponent', () => {
  let component: AgGridBasicComponent;
  let fixture: ComponentFixture<AgGridBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

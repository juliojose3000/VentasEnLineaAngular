import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTotalVentasComponent } from './reporte-total-ventas.component';

describe('ReporteTotalVentasComponent', () => {
  let component: ReporteTotalVentasComponent;
  let fixture: ComponentFixture<ReporteTotalVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTotalVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTotalVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

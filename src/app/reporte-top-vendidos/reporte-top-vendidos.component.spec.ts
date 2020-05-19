import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTopVendidosComponent } from './reporte-top-vendidos.component';

describe('ReporteTopVendidosComponent', () => {
  let component: ReporteTopVendidosComponent;
  let fixture: ComponentFixture<ReporteTopVendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTopVendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTopVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProductosPorPrecioComponent } from './mostrar-productos-por-precio.component';

describe('MostrarProductosPorPrecioComponent', () => {
  let component: MostrarProductosPorPrecioComponent;
  let fixture: ComponentFixture<MostrarProductosPorPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarProductosPorPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarProductosPorPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

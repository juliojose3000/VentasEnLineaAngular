import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCategoriaProductosComponent } from './mostrar-categoria-productos.component';

describe('MostrarCategoriaProductosComponent', () => {
  let component: MostrarCategoriaProductosComponent;
  let fixture: ComponentFixture<MostrarCategoriaProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarCategoriaProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCategoriaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

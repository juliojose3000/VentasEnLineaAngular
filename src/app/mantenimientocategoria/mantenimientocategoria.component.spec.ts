import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientocategoriaComponent } from './mantenimientocategoria.component';

describe('MantenimientocategoriaComponent', () => {
  let component: MantenimientocategoriaComponent;
  let fixture: ComponentFixture<MantenimientocategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientocategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientocategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

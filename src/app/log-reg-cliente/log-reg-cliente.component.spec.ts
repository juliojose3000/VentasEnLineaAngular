import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegClienteComponent } from './log-reg-cliente.component';

describe('LogRegClienteComponent', () => {
  let component: LogRegClienteComponent;
  let fixture: ComponentFixture<LogRegClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRegClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRegClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

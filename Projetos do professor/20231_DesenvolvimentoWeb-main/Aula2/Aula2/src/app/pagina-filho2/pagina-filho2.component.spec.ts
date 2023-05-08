import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFilho2Component } from './pagina-filho2.component';

describe('PaginaFilho2Component', () => {
  let component: PaginaFilho2Component;
  let fixture: ComponentFixture<PaginaFilho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFilho2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFilho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

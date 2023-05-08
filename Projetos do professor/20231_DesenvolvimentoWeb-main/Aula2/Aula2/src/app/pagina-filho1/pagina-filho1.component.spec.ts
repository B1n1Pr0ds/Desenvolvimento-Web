import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFilho1Component } from './pagina-filho1.component';

describe('PaginaFilho1Component', () => {
  let component: PaginaFilho1Component;
  let fixture: ComponentFixture<PaginaFilho1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFilho1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFilho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

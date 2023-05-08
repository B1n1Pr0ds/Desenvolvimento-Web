import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPaiComponent } from './pagina-pai.component';

describe('PaginaPaiComponent', () => {
  let component: PaginaPaiComponent;
  let fixture: ComponentFixture<PaginaPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

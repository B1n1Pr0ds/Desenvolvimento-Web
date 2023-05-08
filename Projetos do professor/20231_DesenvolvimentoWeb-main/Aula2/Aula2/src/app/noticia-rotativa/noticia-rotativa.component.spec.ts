import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaRotativaComponent } from './noticia-rotativa.component';

describe('NoticiaRotativaComponent', () => {
  let component: NoticiaRotativaComponent;
  let fixture: ComponentFixture<NoticiaRotativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaRotativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaRotativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

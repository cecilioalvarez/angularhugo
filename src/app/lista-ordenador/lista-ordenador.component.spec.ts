import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenadorComponent } from './lista-ordenador.component';

describe('ListaOrdenadorComponent', () => {
  let component: ListaOrdenadorComponent;
  let fixture: ComponentFixture<ListaOrdenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOrdenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrdenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

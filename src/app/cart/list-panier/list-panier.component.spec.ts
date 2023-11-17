import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPanierComponent } from './list-panier.component';

describe('ListPanierComponent', () => {
  let component: ListPanierComponent;
  let fixture: ComponentFixture<ListPanierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPanierComponent]
    });
    fixture = TestBed.createComponent(ListPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteCart } from './producte-cart';

describe('ProducteCart', () => {
  let component: ProducteCart;
  let fixture: ComponentFixture<ProducteCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducteCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducteCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

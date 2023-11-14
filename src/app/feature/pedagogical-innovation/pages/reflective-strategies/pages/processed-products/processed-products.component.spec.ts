import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedProductsComponent } from './processed-products.component';

describe('ProcessedProductsComponent', () => {
  let component: ProcessedProductsComponent;
  let fixture: ComponentFixture<ProcessedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessedProductsComponent]
    });
    fixture = TestBed.createComponent(ProcessedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

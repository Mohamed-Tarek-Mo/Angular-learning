import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';

@Component({
  selector: 'app-prod-details',
  imports: [],
  templateUrl: './prod-details.html',
  styleUrl: './prod-details.css',
})
export class ProdDetails {
  parameters = inject(ActivatedRoute);
  service = inject(Products);
  id: any;
  product!: any;
  cdr = inject(ChangeDetectorRef);
  constructor() {
    this.parameters.params.subscribe((para) => {
      this.service.getProductById(Number(para['id'])).subscribe((res: any) => {
        this.product = res;
        this.cdr.detectChanges();
      });
    });
  }
}

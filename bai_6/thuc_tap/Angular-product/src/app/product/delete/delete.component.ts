import {Component, OnInit} from '@angular/core';
import {ProductServerService} from '../../server/product-server.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productId: number;
  productForm: FormGroup;

  constructor(private productServer: ProductServerService,
              private router: Router,
              private activate: ActivatedRoute) {
    this.activate.paramMap.subscribe((paramMap: ParamMap) => {
      this.productId = +paramMap.get('id');
      this.getProduct(this.productId);
    });
  }

  ngOnInit(): void {
  }

  private getProduct(productId: number) {
    return this.productServer.findById(productId).subscribe(product => {
      this.productForm = new FormGroup({
        nameProduct: new FormControl(product.nameProduct),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category)
      });
    });
  }

  deleteProduct(id: number) {
    this.productServer.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/product/list']);
    });
  }
}




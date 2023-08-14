import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductServerService} from '../../server/product-server.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productForm: FormGroup;
  productId: number;

  constructor(private activated: ActivatedRoute,
              private productService: ProductServerService,
              private router: Router) {
    this.activated.paramMap.subscribe((paramMap: ParamMap) => {
      this.productId = Number(paramMap.get('id'));
      const product = this.getProduct(this.productId);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        nameProduct: new FormControl(product.nameProduct),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  ngOnInit(): void {
  }

  private getProduct(productId: number) {
    return this.productService.findById(productId);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProductById(id, product);
    alert('Cập nhật thành công');
    this.router.navigateByUrl('/product/list');
  }

}

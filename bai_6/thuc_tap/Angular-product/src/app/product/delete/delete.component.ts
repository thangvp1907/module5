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
      this.productId = Number(paramMap.get('id'));
      const product = this.getProduct(this.productId);
      this.productForm = new FormGroup({
        nameProduct: new FormControl(product.nameProduct),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  ngOnInit(): void {
  }

  private getProduct(productId: number) {
    return this.productServer.findById(productId);
  }

  deleteProduct(id: number) {
    this.productServer.deleteProduct(id);
    this.router.navigateByUrl('/product/list');
  }
}




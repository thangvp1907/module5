import {Component, OnInit} from '@angular/core';
import {ProductServerService} from '../../server/product-server.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  productNew: Product;



  constructor(private productServer: ProductServerService,
              private router: Router,
              private activate: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activate.paramMap.subscribe(value => {
      this.productId = Number(value.get('id'));
    });
    this.productServer.findById(this.productId).subscribe(value => {
      this.productNew = value;
      this.productForm.patchValue(this.productNew);
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      nameProduct: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  deleteProduct(id: number) {
    this.productServer.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/product/list']);
    });
  }
}




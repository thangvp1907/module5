import {Component, OnInit} from '@angular/core';
import {ProductServerService} from '../../server/product-server.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nameProduct: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    price: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(2000)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  });

  constructor(private productServer: ProductServerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productServer.saveProduct(product);
    this.productForm.reset();
    this.router.navigateByUrl('product/list');
  }

}

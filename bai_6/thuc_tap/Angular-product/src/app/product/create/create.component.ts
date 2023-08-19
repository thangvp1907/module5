import {Component, OnInit} from '@angular/core';
import {ProductServerService} from '../../server/product-server.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../server/category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categoryList: Category[];

  productForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nameProduct: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    price: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(2000)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    category: new FormControl()
  });

  constructor(private productServer: ProductServerService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    }, error => {
      console.log(error);
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productServer.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      alert('tạo thành công');
    });
  }

}

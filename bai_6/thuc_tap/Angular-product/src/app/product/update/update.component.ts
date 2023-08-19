import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductServerService} from '../../server/product-server.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../server/category.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  productNew: Product;
  categoryList: Category[] = [];


  constructor(private activated: ActivatedRoute,
              private productService: ProductServerService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(value => {
      this.productId = Number(value.get('id'));
    });
    // tìm product theo id
    this.productService.findById(this.productId).subscribe(value => {
      this.productNew = value;
      this.productForm.patchValue(this.productNew);
    });
    // tìm và hiển thị list category
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    });
    // tạo form group để edit
    this.productForm = new FormGroup({
      id: new FormControl(),
      nameProduct: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  updateProduct() {
    const productAfter = this.productForm.value;
    productAfter.id = this.productNew.id;
    this.productService.updateProduct(productAfter).subscribe(value => {
      }, error => {
      }, () => {
        this.router.navigateByUrl('/product/list');
        alert('Cập nhật thành công !!!');
      }
    );
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductServerService} from '../../server/product-server.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  product: Product[] = [];

  constructor(private ProductServer: ProductServerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.ProductServer.getAll().subscribe(value => {
      this.product = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });
  }

}



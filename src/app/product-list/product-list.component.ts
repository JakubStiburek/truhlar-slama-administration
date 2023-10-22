import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

interface ProductImage {
  id: number;
  uri: string;
  type: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  amount: number;
  code: string;
  images: ProductImage[];
}

interface ProductListDto {
  amount: number;
  products: Product[];
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.http.get<ProductListDto>(`${environment.apiUrl}/products`).subscribe(list => {
      this.products = list.products;
    });
  }

  goToItem(event: Event, code: string) {
    event.preventDefault();
    this.router.navigate(['products', code]);
  }
}

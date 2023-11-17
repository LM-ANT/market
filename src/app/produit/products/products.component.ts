import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: any = [];

  constructor(private productsService: ProductsService) {}

  /**
   * La fonction ngOnInit est appelée lorsque le composant est initialisé et appelle la fonction
   * getProductList.
   */
  public ngOnInit(): void {
    this.getProductList();
  }

  /**
   * La fonction `getProductList` récupère une liste de produits d'un service, attribue une quantité de
   * 1 à chaque produit.
   */
  public getProductList(): void {
    this.productsService.getProductsList().subscribe((data: any) => {
      this.products = data;
      //console.log(data);
      this.products.products.forEach((product: any) => {
        product.quantity = 0;
      });
    });
  }
}

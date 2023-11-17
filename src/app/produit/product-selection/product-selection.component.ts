import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss'],
})
export class ProductSelectionComponent {
  @Input() product: any;

  quantity: number = 1;

  constructor(private sharedService: SharedService) {}

  /* La fonction addProduct augmente la quantité d'un produit si elle est inférieure au stock du
   produit.*/
  public addProduct(product: any): void {
    if (this.quantity < product.stock) {
      this.quantity += 1;
    }
  }

  /* La fonction « public RemoveProduct » diminue la quantité d'un produit de 1, tant que la quantité
  est supérieure à 1. */
  public removeProduct(product: any): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

 /* La fonction « public checkStock » vérifie si la quantité actuelle du produit dépasse le stock
 disponible. Si la quantité est supérieure au stock, il fixe la quantité à la valeur maximale du
 stock. Cela garantit que l'utilisateur ne peut pas sélectionner une quantité supérieure à celle
 disponible en stock. */
  public checkStock(product: any): void {
    if (this.quantity > product.stock) {
      this.quantity = product.stock;
    }
  }

  public addToCart(product: any): void {
    //console.log('this.quantity add: ' + this.quantity);
    product.quantity = this.quantity;
    //console.log(product.quantity);
    this.sharedService.setSharedArray(product);
    this.quantity = 1;
  }
}

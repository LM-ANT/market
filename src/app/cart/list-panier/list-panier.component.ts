import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.scss'],
})
export class ListPanierComponent {
  listPanier: any = [];
  total: number = 0;

  constructor(private sharedService: SharedService) {}

  /* La méthode `public ngOnInit` est un hook de cycle de vie dans Angular qui est appelé après
  l'initialisation du composant. Dans ce code, il est utilisé pour initialiser le tableau
  `listPanier` en appelant la méthode `getSharedArray` depuis `sharedService`. Il appelle également
  la méthode « totalPanier » pour calculer le prix total des articles du tableau « listPanier ». */
  public ngOnInit(): void {
    this.listPanier = this.sharedService.getSharedArray();
    this.totalPanier();
    //console.log(this.listPanier);
  }

  /* La méthode `public totalPanier` calcule le prix total des articles du tableau `listPanier`. Il
  parcourt chaque élément du tableau et multiplie le prix de l'élément par sa quantité. Le total
  calculé est stocké dans la variable « total » et renvoyé par la méthode. */
  public totalPanier(): number {
    this.total = 0;
    this.listPanier.forEach((element: { price: number; quantity: number }) => {
      //console.log(element.price);
      this.total += element.price * element.quantity;
      //console.log(this.total);
    });
    return this.total;
  }

  /* La méthode `public removeProduct` est utilisée pour supprimer un produit du tableau `listPanier`.
  Il prend un paramètre « produit », qui représente le produit à supprimer. */
  public removeProduct(product: any): void {
    this.listPanier.splice(this.listPanier.indexOf(product), 1);
    this.sharedService.deleteProduct(this.listPanier.indexOf(product));
    this.totalPanier();
  }
}

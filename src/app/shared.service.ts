import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private listCartProduct: any[] = [];

  /* Le code `private sharedArraySubject = new BehaviorSubject<any[]>(this.listCartProduct);
  sharedArray = this.sharedArraySubject.asObservable();` crée un `BehaviorSubject` nommé
  `sharedArraySubject` avec une valeur initiale de `this.listCartProduct`. La variable `sharedArray`
  se voit ensuite attribuer la version observable de `sharedArraySubject` à l'aide de la méthode
  `asObservable()`. Cela permet à d'autres composants ou services de s'abonner aux modifications
  apportées au « sharedArray » et de recevoir des mises à jour chaque fois que le «
  sharedArraySubject » émet une nouvelle valeur. */
  private sharedArraySubject = new BehaviorSubject<any[]>(this.listCartProduct);
  sharedArray = this.sharedArraySubject.asObservable();

  /* Le code `private closeCartDialogSubject = new BehaviorSubject<void>(undefined);` crée une nouvelle
  instance de la classe `BehaviorSubject` avec un type générique de `void`. Ce sujet est utilisé
  pour émettre une valeur lorsque la boîte de dialogue du panier doit être fermée. */
  private closeCartDialogSubject = new BehaviorSubject<void>(undefined);
  closeCartDialog$ = this.closeCartDialogSubject.asObservable();

  constructor() {}

  /**
   * La fonction renvoie le tableau partagé listCartProduct.
   * @returns La méthode renvoie le tableau « listCartProduct ».
   */
  public getSharedArray(): any[] {
    return this.listCartProduct;
  }

  /**
   * La fonction définit un tableau partagé et l'émet à un sujet.
   * @param {any[]} data - Le paramètre "data" est un tableau de tout type de données.
   */
  public setSharedArray(data: any[]): void {
    this.checkDounlons(data);
    this.sharedArraySubject.next(this.listCartProduct);
  }

  /**
   * La fonction closeCartDialog ferme la boîte de dialogue du panier.
   */
  public closeCartDialog(): void {
    this.closeCartDialogSubject.next();
  }

  /**
   * La fonction vérifie si un produit existe déjà dans un panier et met à jour sa quantité ou l'ajoute
   * au panier.
   */
  public checkDounlons(data: any): void {
    const dataCopy = { ...data };
    const existingProductIndex = this.listCartProduct.findIndex(
      (element) => element.id === dataCopy.id
    );

    if (existingProductIndex !== -1) {
      this.listCartProduct[existingProductIndex].quantity += dataCopy.quantity;
    } else {
      this.listCartProduct.push(dataCopy);
    }
    //console.log(this.listCartProduct);
  }

  /**
   * La fonction "deleteAllProduct" efface le tableau "listCartProduct" et met à jour le
   * "sharedArraySubject" avec le tableau vide.
   */
  public deleteAllProduct(): void {
    this.listCartProduct = [];
    this.sharedArraySubject.next(this.listCartProduct);
  }

  /**
   * La fonction deleteProduct supprime un produit du tableau listCartProduct à l'index spécifié et met
   * à jour sharedArraySubject avec la liste mise à jour.
   */
  public deleteProduct(index: number): void {
    if (index >= 0 && index < this.listCartProduct.length) {
      this.listCartProduct.splice(index, 1);
    }
    this.sharedArraySubject.next([...this.listCartProduct]);
  }
}

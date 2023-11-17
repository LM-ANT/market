import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListPanierComponent } from '../list-panier/list-panier.component';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Input() total: number = 0;

  constructor(
    private snackBar: MatSnackBar,
    private listPanierComponent: ListPanierComponent,
    private sharedService: SharedService
  ) {}

  /* La méthode `public payeur()` est responsable de la gestion du processus de paiement. Il ouvre un
  snack pour afficher un message indiquant le montant total payé, remercie l'utilisateur pour sa
  commande et fixe une durée d'affichage du snack. */
  public payer(): void {
    this.snackBar.open(
      `Vous avez payé ${this.total} €. Merci pour votre commande.`,
      '',
      {
        duration: 2000,
      }
    );

    this.viderPanier();
    this.sharedService.closeCartDialog();
  }

  /* La méthode `public viderPanier()` se charge de vider le panier. Il appelle la méthode
  `deleteAllProduct()` de `SharedService` pour supprimer tous les produits du panier, définit la
  propriété `listPanier` de `ListPanierComponent` sur un tableau vide, puis appelle la méthode
  `totalPanier()` du `ListPanierComponent` pour recalculer le prix total du panier. */
  public viderPanier(): void {
    this.sharedService.deleteAllProduct();
    this.listPanierComponent.listPanier = [];
    this.listPanierComponent.totalPanier();
  }
}

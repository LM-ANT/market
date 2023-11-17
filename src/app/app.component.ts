import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from './shared.service';
import { ListPanierComponent } from './cart/list-panier/list-panier.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'market';
  nbProduit: number = 0;
  listPanier: any = [];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private sharedService: SharedService
  ) {}

  /**
   * La fonction ngOnInit met à jour un badge et s'abonne à un événement closeCartDialog.
   */
  public ngOnInit(): void {
    this.updateBadge();
    this.sharedService.closeCartDialog$.subscribe(() => {
      this.closeCartDialog();
    });
  }

  /**
   * La fonction `updateBadge` met à jour la variable `nbProduit` en s'abonnant aux modifications du
   * `sharedArray` et en calculant la quantité totale de produits.
   */
  public updateBadge(): void {
    this.sharedService.sharedArray.subscribe((data: any[]) => {
      this.nbProduit = data.reduce(
        (total, product) => total + product.quantity,
        0
      );
    });
  }

  /**
   * La fonction "openCart" vérifie si le nombre de produits dans le panier est supérieur à 0, et si
   * oui, elle ouvre une boîte de dialogue pour afficher les articles du panier ; sinon, il affiche un
   * message de snack indiquant que le panier est vide.
   */
  public openCart(): void {
    if (this.nbProduit > 0) {
      this.dialog.open(ListPanierComponent, {
        width: '700px',
        height: '500px',
      });
    } else {
      this.snackBar.open(`Vous panier est vide`, '', {
        duration: 2000,
      });
    }
  }
  /**
   * La fonction closeCartDialog ferme toutes les fenêtres de dialogue ouvertes.
   */
  public closeCartDialog(): void {
    this.dialog.closeAll();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ListPanierComponent } from './list-panier/list-panier.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DeleteButtonComponent } from './delete-button/delete-button.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    ListPanierComponent,
    DeleteButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductSelectionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,

  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProduitModule { }

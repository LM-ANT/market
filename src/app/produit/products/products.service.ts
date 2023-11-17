import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'https://dummyjson.com/products/';

  constructor(private http: HttpClient) {}

  /**
   * La fonction `getProductsList()` renvoie un observable qui effectue une requête HTTP GET vers une
   * URL spécifiée et gère toutes les erreurs qui se produisent.
   * @returns La fonction `getProductsList()` renvoie un Observable qui émet le résultat d'une requête
   * HTTP GET vers `productsUrl`.
   */
  getProductsList(): Observable<any> {
    return this.http.get(this.productsUrl).pipe(
      catchError((error: any) => {
        console.error(error);
        return error(error);
      })
    );
  }
}

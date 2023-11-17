import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Output() deleteClick = new EventEmitter<void>();

  /* La méthode `public onDeleteClick()` émet un événement appelé `deleteClick`. Cet événement est une
  instance de la classe `EventEmitter` et est décoré avec le décorateur `@Output()`, qui permet à
  l'événement d'être écouté par les composants parents. Lorsque la méthode `onDeleteClick()` est
  appelée, elle émet l'événement `deleteClick`, informant tous les composants parents que le bouton
  de suppression a été cliqué. */
  public onDeleteClick(): void {
    this.deleteClick.emit();
  }
}

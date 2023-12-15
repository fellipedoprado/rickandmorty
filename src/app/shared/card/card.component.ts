import { Component, Input, inject } from '@angular/core';
import { RAMCharacter } from '../../reducers/ramState.state';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { decrement, addFavCharacter, increment, removeFavCharacter } from '../../reducers/ramState.actions';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  private store = inject(Store);

  @Input({ required: true }) character!: RAMCharacter;
  @Input({ required: true }) isFavorite!: boolean;
  faHeart = faHeart;

  constructor() {}

  unfavoriteCharacter(): void {
    this.store.dispatch(removeFavCharacter({character: this.character}));
    this.store.dispatch(decrement());
  }

  favoriteCharacter(): void {
    this.store.dispatch(addFavCharacter({character: this.character}));
    this.store.dispatch(increment());
  }
}

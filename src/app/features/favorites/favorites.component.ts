import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RAMCharacter, RAMState } from '../../reducers/ramState.state';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  private store = inject(Store);
  ramState$?: Observable<RAMState>;

  favoriteCharacterList: RAMCharacter[] = [];

  constructor() {
    this.ramState$ = this.store.select('ramState');
  }

  ngOnInit(): void {
    this.stateSubscription();
  }

  private stateSubscription(): void {
    this.ramState$?.subscribe(res => {
      this.favoriteCharacterList = res.favCharacterList;
    });
  }
}

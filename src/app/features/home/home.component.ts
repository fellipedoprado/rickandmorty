import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { RAMCharacter, RAMState } from '../../reducers/ramState.state';
import { Store } from '@ngrx/store';
import { Observable, debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { loadCharacters, searchCharacter } from '../../reducers/ramState.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  private store = inject(Store);
  ramState$?: Observable<RAMState>;

  searchCharacterList: RAMCharacter[] = [];
  favoriteCharacterList: RAMCharacter[] = [];


  @ViewChild('input') input!: ElementRef;

  constructor() {
    this.ramState$ = this.store.select('ramState');
  }

  ngOnInit(): void {
    this.stateSubscription();
  }

  ngAfterViewInit() {
    if (this.input) {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(500),
          distinctUntilChanged(),
          tap((text) => {
            const term: string = this.input?.nativeElement?.value;
            if (term.length > 0) {
              this.store.dispatch(searchCharacter({term: term}));

            } else {
              this.store.dispatch(loadCharacters());
            }
          })
        )
        .subscribe();
    }
  }

  private stateSubscription(): void {
    this.ramState$?.subscribe(res => {
      this.searchCharacterList = res.searchCharacterList;
      this.favoriteCharacterList = res.favCharacterList;
      this.updateFavValidity(res.favCharacterList);
    });
  }

  private updateFavValidity(list: RAMCharacter[]): void {
    list.forEach(character => {
      this.isFavorited(character.id)
    })
  }

  isFavorited(id: number): boolean {
    return this.favoriteCharacterList.some(character => {
      if (character.id === id) {
        return true;
      }
      return false;
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RAMState } from '../../reducers/ramState.state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  imagePath: string = '/assets/images/logo.png';
  faHouse = faHouse
  faHeart = faHeart

  private store = inject(Store);
  ramState$?: Observable<RAMState>;

  favCharacterCount: number = 0;

  constructor() {
    this.ramState$ = this.store.select('ramState');
  }

  ngOnInit(): void {
    this.stateSubscription();
  }

  private stateSubscription(): void {
    this.ramState$?.subscribe(res => {
      this.favCharacterCount = res.favCharacterCounter;
    });
  }
}

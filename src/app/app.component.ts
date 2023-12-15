import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { Store } from '@ngrx/store';
import { loadCharacters } from './reducers/ramState.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  @ViewChild('scrollframe', { static: false }) scrollFrame!: ElementRef;
  private scrollContainer: any;

  oldScroll: any;
  scrollY: any;

  constructor() {}

  ngOnInit(): void {
    this.getCharactersList();
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
  }

  getCharactersList(page?: number): void {
    this.store.dispatch(loadCharacters());
  }

  private isUserNearBottom(): boolean {
    const threshold = 150;
    const position = window.scrollY + window.innerHeight;
    const height = document.body.scrollHeight;
    return position > height - threshold;
  }

  @HostListener('window:scroll', ['$event'])
  scrolled(event: any): void {
    const isNearBottom = this.isUserNearBottom();
    console.log('isNearBottom', isNearBottom);

    if (isNearBottom) {

    }
  }
}

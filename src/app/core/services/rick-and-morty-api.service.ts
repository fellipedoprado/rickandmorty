import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RAMCharacterAPIData } from '../interfaces/ram-all-characters-list';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyAPIService {
  private readonly API_URL = 'https://rickandmortyapi.com/api/character/';

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters(): Observable<RAMCharacterAPIData> {
    return this.http.get<RAMCharacterAPIData>(this.API_URL);
  }

  getCharacterByName(name: string): Observable<RAMCharacterAPIData> {
    return this.http.get<RAMCharacterAPIData>(this.API_URL + `?name=${name}`);
  }
}

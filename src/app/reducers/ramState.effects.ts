import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { loadCharacters, loadCharactersError, loadCharactersSuccess, searchCharacter, searchCharacterError, searchCharacterSuccess } from "./ramState.actions";
import { RickAndMortyAPIService } from "../core/services/rick-and-morty-api.service";
import { catchError, map, mergeMap, of } from "rxjs";
import { RAMCharacterAPIData } from "../core/interfaces/ram-all-characters-list";



@Injectable()
export class RAMEffects {

  constructor(
    private actions: Actions,
    private ramApiService: RickAndMortyAPIService
  ) {}

  loadCharacters = createEffect(() =>
    this.actions.pipe(
      ofType(loadCharacters),
      mergeMap(() =>
        this.ramApiService.getAllCharacters().pipe(
          map((res: RAMCharacterAPIData) => loadCharactersSuccess({characters: res.results})),
          catchError((error) => of(loadCharactersError({error})))
        )
      )
    )
  )

  searchCharacter = createEffect(() =>
  this.actions.pipe(
    ofType(searchCharacter),
    mergeMap((res) =>
      this.ramApiService.getCharacterByName(res.term).pipe(
        map((res: RAMCharacterAPIData) => searchCharacterSuccess({characters: res.results})),
        catchError((error) => of(searchCharacterError({error})))
      )
    )
  )
  )
}

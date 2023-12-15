import { createAction, props } from "@ngrx/store";
import { RAMCharacter } from "./ramState.state";

export const increment = createAction('[Favorite Counter] Increment');
export const decrement = createAction('[Favorite Counter] Decrement');

/*  */
export const loadCharacters = createAction('[Characters List] Load Characters');
export const loadCharactersSuccess = createAction(
  '[Characters List] Load Characters Success',
  props<{characters: RAMCharacter[]}>()
);
export const loadCharactersError = createAction(
  '[Characters List] Load Characters Error',
  props<{error: string}>()
);

/*  */
export const addFavCharacter = createAction(
  '[Favorite Characters List] Add Character',
  props<{character: RAMCharacter}>()
);
export const removeFavCharacter = createAction(
  '[Favorite Characters List] Remove Character',
  props<{character: RAMCharacter}>()
);

/*  */
export const searchCharacter = createAction(
  '[Characters List] Search Character',
  props<{term: string}>()
  );
export const searchCharacterSuccess = createAction(
  '[Characters List] Search Character Success',
  props<{characters: RAMCharacter[]}>()
);
export const searchCharacterError = createAction(
  '[Characters List] Search Character Error',
  props<{error: string}>()
);


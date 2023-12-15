import { createReducer, on } from "@ngrx/store";
import { decrement, addFavCharacter, increment, loadCharacters, loadCharactersSuccess, removeFavCharacter, searchCharacterSuccess, searchCharacterError } from "./ramState.actions";
import { RAMCharacter, RAMState } from "./ramState.state";

export const initialState: RAMState = {
  favCharacterCounter: 0,
  favCharacterList: [],
  searchCharacterList: []
};

export const RAMReducer = createReducer(
  initialState,
  on(increment, (state: RAMState) => {
    return {...state, favCharacterCounter: state.favCharacterCounter + 1}
  }),
  on(decrement, (state: RAMState) => {
    return {...state, favCharacterCounter: state.favCharacterCounter - 1}
  }),
  on(loadCharacters, (state: RAMState) => {
    return state;
  }),
  on(loadCharactersSuccess, (state: RAMState, {characters}) => {
    return {...state, searchCharacterList: characters}
  }),
  on(searchCharacterSuccess, (state: RAMState, {characters}) => {
    return {...state, searchCharacterList: characters}
  }),
  on(searchCharacterError, (state: RAMState, {error}) => {
    return {...state, searchCharacterList: []}
  }),
  on(addFavCharacter, (state: RAMState, {character}) => {
    let list = [...state.favCharacterList];
    list.push(character);

    return {
      ...state,
      favCharacterList: list,
    }
  }),
  on(removeFavCharacter, (state: RAMState, {character}) => {
    const newFavList: RAMCharacter[] = state.favCharacterList.filter(favCharacter => {
      return favCharacter.id !== character.id;
    });

    return {
      ...state,
      favCharacterList: newFavList,
    }
  }),
);

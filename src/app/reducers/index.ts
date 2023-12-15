import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { RAMReducer } from './ramState.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  ramState: RAMReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

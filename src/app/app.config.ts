import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { provideEffects } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RAMEffects } from './reducers/ramState.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    importProvidersFrom(HttpClientModule),
    provideEffects(RAMEffects),
  ]
};

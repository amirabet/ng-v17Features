import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      /*
      * Activates View Transitions, accepting options
      */
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated(transitionInfo) {
          console.log('transitionInfo',transitionInfo);
        }
      }),
    ),
    importProvidersFrom(
      /*
      * With this import we're able to work with 
      * HttpClient in all standalone Components
      */
      HttpClientModule
    )
  ]
};

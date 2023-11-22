import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withDebugTracing, withInMemoryScrolling, withPreloading, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

// https://angular.io/api/router/RouterFeatures

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withViewTransitions(),
      //withDebugTracing(), // Debug
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      }),
      withComponentInputBinding(), 
      //withPreloading(PreloadAllModules),
      withRouterConfig({

      })),
  
    // withNavigationErrorHandler((e: NavigationError) =>
    //   inject(MyErrorTracker).trackError(e))

  ]
};

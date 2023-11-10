import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { provideTransloco } from '@ngneat/transloco';
import { TranslocoHttpLoader } from '../services/transloco-http-loader.service';

import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { environment } from '@bobb/client/environments';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { Api } from '@bobb/graphql';
import { RoomService } from './rooms/services';

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(),
		provideTransloco({
			config: {
				availableLangs: ['en', 'nl'],
				defaultLang: 'en',
				fallbackLang: 'en',
				// Remove this option if your application doesn't support changing language in runtime.
				reRenderOnLangChange: true,
				prodMode: !isDevMode(),
			},
			loader: TranslocoHttpLoader,
		}),
		{
			provide: APOLLO_OPTIONS,
			useFactory: (httpLink: HttpLink): ApolloClientOptions<unknown> => ({
				link: httpLink.create({ uri: environment.graphqlUrl }),
				cache: new InMemoryCache(),
			}),
			deps: [HttpLink],
		},
		Apollo,

		// routes
		provideRouter(appRoutes),

		// sdk
		Api,

		//services
		RoomService,
	],
};

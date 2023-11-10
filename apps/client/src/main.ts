import { bootstrapApplication } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

initFlowbite();
bootstrapApplication(AppComponent, appConfig).catch((err) =>
	console.error(err),
);

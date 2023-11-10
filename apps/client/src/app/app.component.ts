import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { defaultImports } from '../utils';

@Component({
	standalone: true,
	imports: [...defaultImports, RouterModule],
	selector: 'bobb-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

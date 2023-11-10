import { ChangeDetectionStrategy, Component } from '@angular/core';
import { defaultImports } from '@bobb/client/utils';

@Component({
	standalone: true,
	imports: [...defaultImports],
	templateUrl: './home.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../components';

@Component({
	standalone: true,
	imports: [RouterModule, ThemeToggleComponent],
	selector: 'bobb-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

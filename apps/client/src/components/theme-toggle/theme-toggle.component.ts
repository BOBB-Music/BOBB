import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	signal,
} from '@angular/core';

@Component({
	standalone: true,
	imports: [],
	selector: 'bobb-theme-toggle',
	templateUrl: './theme-toggle.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent implements OnInit {
	public theme$ = signal<'dark' | 'light' | null>(null);

	ngOnInit() {
		if (!localStorage.getItem('bobb-theme')) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				this.set('dark');
				return;
			}

			this.set('light');
		}

		if (localStorage.getItem('bobb-theme')) {
			this.set(localStorage.getItem('bobb-theme') as 'dark' | 'light');
		}
	}

	toggle() {
		const theme = this.theme$();

		if (theme === 'dark') {
			this.set('light');
			return;
		}

		this.set('dark');
	}

	set(theme: 'dark' | 'light') {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('bobb-theme', 'dark');
			this.theme$.set('dark');
			return;
		}

		document.documentElement.classList.remove('dark');
		this.theme$.set('light');
		localStorage.setItem('bobb-theme', 'light');
	}
}

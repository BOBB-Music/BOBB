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

	private _clickCount = 0;
	private _strobing = false;
	private _strobingIntervalTime = 200;

	private _clickTimeout: NodeJS.Timeout | undefined;

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

		if (this._clickTimeout) {
			clearTimeout(this._clickTimeout);
			this._clickTimeout = undefined;
		}

		this._clickCount = this._clickCount + 1;
		this._clickTimeout = setTimeout(() => (this._clickCount = 0), 200);

		if (this._clickCount === 10) {
			return this._toggleStrobing();
		}

		if (this._strobing) {
			return;
		}

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

	private _toggleStrobing() {
		if (this._strobing) {
			this._clickCount = 0;
			this._strobing = false;
			this._strobingIntervalTime = 200;
			return;
		}

		this._strobing = true;
		this._doStrobe();
	}

	private _doStrobe() {
		if (!this._strobing) {
			return;
		}

		if (this._strobingIntervalTime > 75) {
			this._strobingIntervalTime -= 2;
		}

		setTimeout(() => {
			this.set(this.theme$() === 'dark' ? 'light' : 'dark');
			this._doStrobe();
		}, this._strobingIntervalTime);
	}
}

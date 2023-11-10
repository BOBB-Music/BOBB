import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '@bobb/client/app/transloco-testing.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeComponent, getTranslocoModule(), RouterTestingModule],
		}).compileComponents();
	});

	it('should render BOBB', () => {
		const fixture = TestBed.createComponent(HomeComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('h1')?.textContent).toContain('BOBB');
	});

	it('should render Coming Soon', () => {
		const fixture = TestBed.createComponent(HomeComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('h2')?.textContent).toContain(
			'Coming Soon',
		);
	});
});

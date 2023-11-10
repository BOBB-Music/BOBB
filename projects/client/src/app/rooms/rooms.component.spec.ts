import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '@bobb/client/app/transloco-testing.module';
import { RoomsComponent } from './rooms.component';

describe('RoomsComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RoomsComponent,
				getTranslocoModule(),
				RouterTestingModule,
			],
		}).compileComponents();
	});

	it('should render', () => {
		const fixture = TestBed.createComponent(RoomsComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('h1')?.textContent).toContain('BOBB');
	});
});

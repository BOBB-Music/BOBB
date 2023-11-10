import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { defaultImports } from '@bobb/client/utils';
import { RoomService } from './services';

@Component({
	standalone: true,
	imports: [...defaultImports],
	templateUrl: './rooms.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent {
	rooms$ = inject(RoomService).findManyRooms().result$;
}

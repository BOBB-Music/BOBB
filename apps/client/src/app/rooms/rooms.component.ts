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
	private _room = inject(RoomService);
	rooms$ = this._room.getRooms().result$;
	createRoom$ = this._room.createRoom();
	createRoomResult$ = this.createRoom$?.result$;

	createRoom() {
		this.createRoom$?.mutate();
	}
}

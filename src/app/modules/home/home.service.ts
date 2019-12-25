import { Injectable } from '@angular/core';
import { LocalstoreService } from 'src/app/core/storage/localstore.service';
let id = 0;

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	constructor(
		private store: LocalstoreService
	) {
		const lastId = this.store.lastId;
		if (lastId) {
			id = lastId;
		}
	}

	getUniqueId() {
		return ++id;
	}

	getMessages(): any[] {
		return this.store.messages;
	}

	saveMessages(messages: any[]) {
		this.store.messages = messages;
	}
}

import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalstoreService {

	constructor() { }

	private getFromStore(key: string): string {
		if (!key) {
			return null;
		}
		return localStorage.getItem(key);
	}

	private saveInStore(key: string, value: string): void {
		if (key && value) {
			localStorage.setItem(key, value);
		}
	}

	private removeFromStore(key: string) {
		localStorage.removeItem(key);
	}

	set token(value: string) {
		this.saveInStore('token', value);
	}

	get token(): string {
		return this.getFromStore('token');
	}

	set user(user: object) {
		if (!user) {
			this.removeFromStore('user');
			return;
		}
		this.saveInStore('user', JSON.stringify(user));
	}

	get user(): object {
		return this.getFromStore('user') ? JSON.parse(this.getFromStore('user')) : null;
	}

	set messages(messages) {
		let id;
		messages.map((msg) => {
			if (!id) {
				id = msg.id;
				return;
			}
			if (msg.id > id) {
				id = msg.id;
			}
		});
		this.saveInStore('lastId', id.toString());
		this.saveInStore('messages', JSON.stringify(messages));
	}

	get messages(): any[] {
		return this.getFromStore('messages') ? JSON.parse(this.getFromStore('messages')) : [];
	}

	get lastId() {
		return this.getFromStore('lastId') ? Number(this.getFromStore('lastId')) : undefined;
	}

	reset() {
		localStorage.clear();
	}
}

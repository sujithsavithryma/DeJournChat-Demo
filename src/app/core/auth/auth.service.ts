import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LocalstoreService } from '../storage/localstore.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private store: LocalstoreService,
		private router: Router
	) { }

	login(username: string) {
		const user = {
			username,
			id: Math.round(Math.random())
		};
		const token = Math.random().toString(36).substring(7);
		this.store.token = token;
		this.store.user = user;
		this.router.navigateByUrl('');
	}

	isLoggedIn(): boolean {
		return this.store.user ? true : false;
	}

	logout() {
		this.store.reset();
		this.router.navigateByUrl('login');
	}

	get user() {
		return this.store.user;
	}
}

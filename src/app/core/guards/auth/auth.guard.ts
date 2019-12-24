import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private auth: AuthService
		) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
		): Promise<boolean> | boolean {
		if (route.routeConfig.path === 'login') {
			if (this.auth.isLoggedIn()) {
				this.router.navigateByUrl('');
				return false;
			} else {
				return true;
			}
		}
		if (this.auth.isLoggedIn()) {
			return true;
		}
		this.router.navigateByUrl('login');
	}

}

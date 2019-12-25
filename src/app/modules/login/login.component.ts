import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	username: FormControl = new FormControl();
	constructor(
		private auth: AuthService
	) { }

	ngOnInit() {
	}

	login() {
		if (this.username.value !== null && this.username.value !== '') {
			this.auth.login(this.username.value);
		}
	}

}

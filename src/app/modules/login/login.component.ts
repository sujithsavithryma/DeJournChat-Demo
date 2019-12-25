import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: FormControl = new FormControl();
	constructor(
		private auth: AuthService
	) { }

	ngOnInit() {
	}

	login() {
		if (this.email.value !== null && this.email.value !== '') {
			this.auth.login(this.email.value);
		}
	}

}

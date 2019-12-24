import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	openThread = false;
	user;
	messages = MESSAGES;
	constructor(
		private auth: AuthService
	) { }

	ngOnInit() {
		this.user = this.auth.user;
	}

}



export interface Message {
	id: number;
	fromUserId: number;
	user: string;
	thumbnail: string;
	date: string;
	toUserId: number;
	parentMessageId?: number;
	message: string;
}

const MESSAGES: Message[] = [
	{
		id: 1,
		fromUserId: 1,
		user: 'Sujith',
		thumbnail: '',
		date: '12-12-19',
		toUserId: 1,
		message: 'hghbhbh'
	}
];

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
	selectedMsg;
	constructor(
		private auth: AuthService
	) { }

	ngOnInit() {
		this.user = this.auth.user;
	}

	send(event) {
		if (event.keyCode === 13 || event.target.keyCode === 13) {
			const message: Message = {
				id: Math.round(Math.random()),
				fromUserId: this.user.id,
				user: this.user.email,
				thumbnail: '',
				date: new Date().toDateString(),
				toUserId: this.user.id,
				message: 'hgfghg'
			};

			this.messages.push(message);
		}
	}

	startThread(msg) {
		this.selectedMsg = msg;
		this.openThread = !this.openThread;
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

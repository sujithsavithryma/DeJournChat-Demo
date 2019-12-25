import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormControl } from '@angular/forms';

let id = 0;

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

	message: FormControl = new FormControl();
	replyMessage: FormControl = new FormControl();

	keyCodes = {
		shiftkey: false,
		enterkey: false
	};

	@ViewChild('messagesRef', { static: false }) messagesRef: ElementRef;
	@ViewChild('messageTextAreaRef', { static: false }) messageTextAreaRef: ElementRef;
	@ViewChild('replyMessagesRef', { static: false }) replyMessagesRef: ElementRef;

	constructor(
		private auth: AuthService,
	) { }

	ngOnInit() {
		this.user = this.auth.user;
	}

	send(event) {
		if (event.keyCode === 16) {
			this.keyCodes.shiftkey = true;
		}
		if (event.keyCode === 13) {
			this.keyCodes.enterkey = true;
		}
		if (!this.keyCodes.shiftkey && this.keyCodes.enterkey && this.message.value !== null && this.message.value !== '') {
			const message: Message = {
				id: ++id,
				fromUserId: this.user.id,
				user: this.user.email,
				thumbnail: '',
				date: new Date().toDateString(),
				toUserId: this.user.id,
				message: this.message.value,
			};

			this.messages.push(message);
			this.message.setValue('');

			this.messageTextAreaRef.nativeElement.focus();
			setTimeout(() => {
				this.messagesRef.nativeElement.scrollTop = this.messagesRef.nativeElement.scrollHeight;
			}, 10);
			event.preventDefault();
		}
	}

	startThread(msg) {
		this.selectedMsg = msg;
		this.openThread = true;
	}

	reply(event, msg) {
		if (event.keyCode === 16) {
			this.keyCodes.shiftkey = true;
		}
		if (event.keyCode === 13) {
			this.keyCodes.enterkey = true;
		}
		if (!this.keyCodes.shiftkey && this.keyCodes.enterkey && this.replyMessage.value !== null && this.replyMessage.value !== '') {
			const message: Message = {
				id: ++id,
				fromUserId: this.user.id,
				user: this.user.email,
				thumbnail: '',
				date: new Date().toDateString(),
				toUserId: msg.fromUserId,
				message: this.replyMessage.value,
			};

			const index = this.messages.findIndex(mes => mes.id === msg.id);
			if (index !== -1) {
				this.messages[index].replies ? this.messages[index].replies.push(message) : this.messages[index]['replies'] = [message];
				this.messages = this.messages.slice(0);
			}
			this.replyMessage.setValue('');
			event.preventDefault();

			// this.messageTextAreaRef.nativeElement.focus();
			setTimeout(() => {
				this.replyMessagesRef.nativeElement.scrollTop = this.replyMessagesRef.nativeElement.scrollHeight;
			}, 10);
		}
	}

	resetKey() {
		this.keyCodes.shiftkey = false;
		this.keyCodes.enterkey = false;
	}

}



export interface Message {
	id: number;
	fromUserId: number;
	user: string;
	thumbnail: string;
	date: string;
	toUserId: number;
	replies?: any[];
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

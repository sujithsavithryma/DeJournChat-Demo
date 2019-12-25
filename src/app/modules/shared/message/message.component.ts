import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

	@Input() message;
	@Input() enableReply = false;
	@Output() reply: EventEmitter<any> = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

}

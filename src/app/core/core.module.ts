import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LocalstoreService } from './storage/localstore.service';

@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	providers: [
		AuthGuard,
		AuthService,
		LocalstoreService
	]
})
export class CoreModule { }

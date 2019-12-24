import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { MessageComponent } from './modules/shared/message/message.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		MessageComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

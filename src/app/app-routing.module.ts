import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
	{
		path: '', component: HomeComponent,
		canActivate: [ AuthGuard ]
	},
	{
		path: 'login', component: LoginComponent,
		canActivate: [ AuthGuard ]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

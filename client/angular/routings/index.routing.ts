import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }     from '../components/rpg/home/home.component';
import { LoginComponent }     from '../components/rpg/login/login.component';
import { ProfileComponent }     from '../components/rpg/profile/profile.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent }
];

export const IndexRouting = RouterModule.forRoot(appRoutes); 
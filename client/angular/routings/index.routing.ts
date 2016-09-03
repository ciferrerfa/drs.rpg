import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }     from '../components/rpg/home/home.component';
import { LoginComponent }     from '../components/rpg/login/login.component';
import { SingupComponent }     from '../components/rpg/singup/singup.component';
import { ManageHomeComponent }     from '../components/rpg/manage/home/manage-home.component';
import { ManageAccountDetailComponent }	from '../components/rpg/manage/account/detail/manage-account-detail.component';
import { ManageAccountListComponent }	from '../components/rpg/manage/account/list/manage-account-list.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home',		component: HomeComponent },
	{ path: 'login',	component: LoginComponent },
	{ path: 'singup',	component: SingupComponent },
	{ path: 'manage',	children: [
		{ path: '', 				component: ManageHomeComponent },
		{ path: 'manage/account',			component: ManageAccountListComponent,		outlet:'manage' },
		{ path: 'manage/account/:userId',	component: ManageAccountDetailComponent,	outlet:'manage' }
	] }
];

export const IndexRoutingProviders: any[] = [ ];

export const IndexRouting = RouterModule.forRoot(appRoutes, { useHash: true }); 
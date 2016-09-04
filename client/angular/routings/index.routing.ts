import { Routes, RouterModule }				from '@angular/router';

import { HomeComponent }					from '../components/rpg/home/home.component';
import { LoginComponent }					from '../components/rpg/login/login.component';
import { SingupComponent }					from '../components/rpg/singup/singup.component';
import { ManageHomeComponent }				from '../components/rpg/manage/home/manage-home.component';
import { ManageAccountListComponent }		from '../components/rpg/manage/account/list/manage-account-list.component';
import { ManageAccountDetailComponent }		from '../components/rpg/manage/account/detail/manage-account-detail.component';
import { ManageLanguageListComponent }		from '../components/rpg/manage/language/list/manage-language-list.component';
import { ManageLanguageDetailComponent }	from '../components/rpg/manage/language/detail/manage-language-detail.component';
import { ManageRoleListComponent }			from '../components/rpg/manage/role/list/manage-role-list.component';
import { ManageRoleDetailComponent }		from '../components/rpg/manage/role/detail/manage-role-detail.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home',		component: HomeComponent },
	{ path: 'login',	component: LoginComponent },
	{ path: 'singup',	component: SingupComponent },
	{ path: 'manage',	children: [
		{ path: '',					component: ManageHomeComponent },
		{ path: 'account',			component: ManageAccountListComponent },
		{ path: 'account/:userId',	component: ManageAccountDetailComponent },
		{ path: 'language',			component: ManageLanguageListComponent },
		{ path: 'language/:code',	component: ManageLanguageDetailComponent },
		{ path: 'role',				component: ManageRoleListComponent },
		{ path: 'role/:name',		component: ManageRoleDetailComponent }
		/*,
		{ path: 'account',			component: ManageAccountListComponent,		outlet:'/manage' },
		{ path: 'account/:userId',	component: ManageAccountDetailComponent,	outlet:'/manage' },
		{ path: 'language',			component: ManageLanguageListComponent,		outlet:'/manage' },
		{ path: 'language/:code',	component: ManageLanguageDetailComponent,	outlet:'/manage' },
		{ path: 'role',				component: ManageRoleListComponent,			outlet:'/manage' },
		{ path: 'role/:name',		component: ManageRoleDetailComponent,		outlet:'/manage' }
		*/
	]}
];

export const IndexRoutingProviders: any[] = [ ];

export const IndexRouting = RouterModule.forRoot(appRoutes, { useHash: true }); 
import { Routes, RouterModule } from '@angular/router';

import { RpgHomeComponent }     from '../components/rpg/home/rpg-home.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: RpgHomeComponent }
];

export const IndexRouting = RouterModule.forRoot(appRoutes);
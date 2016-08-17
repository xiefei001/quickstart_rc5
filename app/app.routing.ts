import {Routes, RouterModule} from "@angular/router";
export const routes:Routes = [
  {path: '', redirectTo:'contact', pathMatch:'full'},
  {path:'crisis', loadChildren: 'app/crisis/crisis.module'},
  {path:'heroes', loadChildren: 'app/heroes/heroes.module'}
];

export const routing = RouterModule.forRoot(routes);



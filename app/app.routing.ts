import {Routes, RouterModule} from "@angular/router";
export const routes:Routes = [
  {path: '', redirectTo:'contact', pathMatch:'full'},
  {path:'crisis', loadChildren: 'app/crisis/crisis.module'}
];

export const routing = RouterModule.forRoot(routes);



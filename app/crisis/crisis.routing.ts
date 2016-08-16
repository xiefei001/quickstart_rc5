import {Routes, RouterModule} from "@angular/router";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {ModuleWithProviders} from "@angular/core";
const routes: Routes = [
  {path: '', redirectTO: 'list', pathMatch: 'full'},
  {path: 'list', component: CrisisListComponent},
  {path: ':id', component: CrisisDetailComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

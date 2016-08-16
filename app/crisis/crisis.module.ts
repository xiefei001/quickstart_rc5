import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {routing} from "./crisis.routing";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisService} from "./crisis.service";
@NgModule({
  imports: [CommonModule, routing],
  declarations: [CrisisDetailComponent, CrisisListComponent],
  providers: [CrisisService]
})
export default class CrisisModule{}

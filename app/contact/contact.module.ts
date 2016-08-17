import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "./contact.component";
import {HighlightDirective} from "./highlight.directive";
import {AwesomePipe} from "./awesome.pipe";
import {ContactService} from "./contact.service";
import {routing} from "./contact.routing";

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [ContactComponent, HighlightDirective, AwesomePipe],
  //exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule {

}

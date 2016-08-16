import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "./contact.component";
import {HighlightDirective} from "./highlight.directive";
import {AwesomePipe} from "./awesome.pipe";
import {ContactService} from "./contact.service";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactComponent, HighlightDirective, AwesomePipe],
  exports: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule {

}

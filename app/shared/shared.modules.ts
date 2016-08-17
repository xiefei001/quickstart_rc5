import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AwesomePipe} from "./awesome.pipe";
import {HighlightDirective} from "./highlight.directive";
import {TitleComponent} from "./title.component";
import {UserService} from "./user.service";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [CommonModule],
  declarations: [AwesomePipe, HighlightDirective, TitleComponent],
  exports: [AwesomePipe, HighlightDirective, TitleComponent, CommonModule, FormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [UserService]
    }
  }
}

@NgModule({
  exports: [SharedModule],
  providers: [UserService]
})
export class SharedRootModule{}

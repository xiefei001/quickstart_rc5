import {Component, Input} from "@angular/core";
import {UserService} from "./user.service";
@Component({
  selector: 'app-title',
  templateUrl: 'app/title.component.html'
})
export class TitleComponent {
  title = 'Angular Modules';
  @Input()
  subtitle = '';
  user = '';

  constructor(private userService: UserService) {
    this.user = this.userService.userName;
  }

}

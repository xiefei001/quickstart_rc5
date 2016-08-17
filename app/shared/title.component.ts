import {Component, Input} from "@angular/core";
import {UserService} from "./user.service";
@Component({
  selector: 'app-title',
  templateUrl: 'app/shared/title.component.html'
})
export class TitleComponent {
  @Input()
  title = 'Angular Modules';
  user='';
  constructor(private userService: UserService){
    this.user = userService.userName;
  }
}

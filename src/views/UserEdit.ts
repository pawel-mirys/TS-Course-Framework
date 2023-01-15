import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../interfaces';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.userShow',
      userForm: '.userForm',
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div class="userShow"></div>
        <div class="userForm"></div>
      </div>
    `;
  }
}

import { UserProps } from '../interfaces';
import { User } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.setAge': this.onSetAgeClick,
      'click:.setName': this.onSetNameClick,
      'click:.save': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="setName">Set Name</button>
        <button class="setAge">Set Random Age</button>
        <button class="save">Save</button>
      </div>
    `;
  }
}

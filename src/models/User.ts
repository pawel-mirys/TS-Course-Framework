import { UserProps } from '../interfaces';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

const URL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes<UserProps>(attrs), new Eventing(), new ApiSync<UserProps>(URL));
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(URL, (json: UserProps) => User.buildUser(json));
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
  setName(name: string): void {
    this.set({ name });
  }
}

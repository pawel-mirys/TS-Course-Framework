import { UserProps } from '../interfaces';
import { Eventing } from './eventing';
import { Sync } from './Sync';

const URL = 'http://localhost:3000/users';
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(URL);

  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): string | number | void {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}

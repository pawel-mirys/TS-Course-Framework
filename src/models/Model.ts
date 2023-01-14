import { AxiosResponse } from 'axios';
import { Events, HasId, ModelAttributes, Sync } from '../interfaces';

export class Model<T extends HasId> {
  constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id!');
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.attributes.set(response.data);
    });
  }
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}

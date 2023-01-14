// import { Collection } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { Eventing } from './eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public URL: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
  fetch(): void {
    axios.get(this.URL).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger('change');
    });
  }
}

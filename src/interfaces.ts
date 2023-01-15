import { Callback } from './types';
import { AxiosPromise } from 'axios';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export interface HasId {
  id?: number;
}

export interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface ParentElement {
  itemParent: HTMLDivElement;
}

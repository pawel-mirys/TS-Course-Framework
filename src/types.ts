import { AxiosPromise } from 'axios';

export type Callback = () => void;

export type FetchCallback = (id: number) => AxiosPromise;

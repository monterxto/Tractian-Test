import { HttpResponse } from '@/Application/protocols';

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}

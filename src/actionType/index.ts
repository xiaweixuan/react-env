import { AnyAction } from 'redux';

export type Effect<A = AnyAction, TReturn = any, TNext = unknown> = (
  action: A,
  payload: {},
) => Generator<unknown, TReturn, TNext>;

export type ActionFucType<T extends { payload: any }> = (payload: T['payload']) => T;
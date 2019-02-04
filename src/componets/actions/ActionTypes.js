/*
  Action의 종류를 선언.
  export를 붙이면 나중에 특정 action을 불러 올 때
  import * as types from './ActionTypes' 를 할 수 있음
*/

export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';
//ACTION을 선언할 때 대문자로 하는 것을 권장함


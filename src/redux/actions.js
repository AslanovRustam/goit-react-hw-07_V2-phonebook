import types from './types';
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

//
///=====ШАГ №1 - ванильный Redux

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.FILTER,
//   payload: value,
// });
const addContact = createAction(types.ADD, (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
const changeFilter = createAction(types.FILTER);
const deleteContact = createAction(types.DELETE);
export default { addContact, deleteContact, changeFilter };

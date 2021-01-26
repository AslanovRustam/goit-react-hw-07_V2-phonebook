import { useRef } from 'react';
import { combineReducers } from 'redux';
import types from './types';
import { createReducer } from '@reduxjs/toolkit';

const contactsFirstRender = [
  { id: 'id-1', name: 'Barak Obama', number: '459-12-56' },
  { id: 'id-2', name: 'Donald Trump', number: '443-89-12' },
  { id: 'id-3', name: 'George Washington', number: '645-17-79' },
  { id: 'id-4', name: 'Thomas Jefferson', number: '227-91-26' },
];

const contacts = createReducer(contactsFirstRender, {
  'contacts/add': (state, action) => [...state, action.payload],
  // 'contacts/add': (state, action) => [...state, action.payload :{
  //   const getContacts = state.map(contact =>
  //       contact.name.toLocaleLowerCase(),
  //     );
  //     const isGetContactAlready = getContacts.includes(
  //       payload.name.toLocaleLowerCase(),
  //     );
  //     if (isGetContactAlready) {
  //       alert(`${contacts.name} is already in contacts!`);
  //       return state;
  //     } else {
  //       return [...state, payload];
  //     }
  // }],

  'contact/delete': (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
// const contacts = (state = contactsFirstRender, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       const getContacts = state.map(contact =>
//         contact.name.toLocaleLowerCase(),
//       );
//       const isGetContactAlready = getContacts.includes(
//         payload.name.toLocaleLowerCase(),
//       );
//       if (isGetContactAlready) {
//         alert(`${contacts.name} is already in contacts!`);
//         return state;
//       } else {
//         return [...state, payload];
//       }
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter });

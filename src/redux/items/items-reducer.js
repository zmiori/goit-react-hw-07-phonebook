import { createReducer } from '@reduxjs/toolkit';
import {
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './items-actions';

export const itemsReduser = createReducer([], {
  [fetchAllContactsSuccess]: (state, { payload }) =>
    payload,

  [addNewContactSuccess]: (state, { payload }) => {
    console.log('ADD');
    // if (
    //   state.find(contact => contact.name === payload.name)
    // ) {
    //   alert(`${payload.name} is already in contacts`);
    //   return state;
    // } else return [payload, ...state];
    return [payload, ...state];
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

export const isLoadingReduser = createReducer(false, {
  [fetchAllContactsRequest]: () => true,
  [fetchAllContactsSuccess]: () => false,
  [fetchAllContactsError]: () => false,
  [addNewContactRequest]: () => true,
  [addNewContactSuccess]: () => false,
  [addNewContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

// export default itemsReduser;

import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsRequest = createAction(
  'fetchAllContactsRequest',
);
export const fetchAllContactsSuccess = createAction(
  'contacts/fetchAllContactsSuccess',
);
export const fetchAllContactsError = createAction(
  'contacts/fetchAllContactsError',
);

export const addNewContactRequest = createAction(
  'addNewContactRequest',
);
export const addNewContactSuccess = createAction(
  'contacts/addNewContactSuccess',
);
export const addNewContactError = createAction(
  'contacts/addNewContactError',
);

export const deleteContactRequest = createAction(
  'deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction(
  'contacts/deleteContactError',
);

// export const deleteContact = createAction(
//   'contacts/deleteContact',
// );

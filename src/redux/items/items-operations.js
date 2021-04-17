import {
  fetchAllContacts,
  addNewContact,
  deleteContactById,
} from '../../services/api';

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

export const fetchContacts = () => async dispatch => {
  dispatch(fetchAllContactsRequest());

  try {
    const contacts = await fetchAllContacts();
    dispatch(fetchAllContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchAllContactsError(error));
  }
};

export const addContact = contact => dispatch => {
  dispatch(addNewContactRequest());

  addNewContact(contact)
    .then(({ data }) => {
      console.log(data);
      return dispatch(addNewContactSuccess(data));
    })
    .catch(error => dispatch(addNewContactError(error)));
};

export const deleteContact = contact => dispatch => {
  console.log(contact);
  dispatch(deleteContactRequest());

  deleteContactById(contact.id)
    .then(() => dispatch(deleteContactSuccess(contact)))
    .catch(error => dispatch(deleteContactError(error)));
};

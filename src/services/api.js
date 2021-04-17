import axios from 'axios';

const BASE_URL = 'http://localhost:3000/contacts';
axios.defaults.baseURL = BASE_URL;

export async function fetchAllContacts() {
  const { data } = await axios.get('');
  return data;
}
export function addNewContact(contact) {
  return axios.post('', contact);
}

export function deleteContactById(contactId) {
  console.log(contactId);
  return axios.delete(`${contactId}`);
}

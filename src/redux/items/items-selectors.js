import { createSelector } from 'reselect';

export const getContactsFilter = state =>
  state.contacts.filter;
export const getContactsIsLoading = state =>
  state.contacts.isLoadong;
export const getContactsItems = state =>
  state.contacts.items;

// export const getContactsFilteredItems = state => {
//   const items = getContactsItems(state);
//   const filter = getContactsFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

export const getContactsFilteredItems = createSelector(
  [getContactsItems, getContactsFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

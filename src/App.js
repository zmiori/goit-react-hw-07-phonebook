import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

import changeFilter from './redux/filter/filter-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './redux/items/items-operations';
import {
  getContactsFilter,
  getContactsFilteredItems,
  getContactsIsLoading,
} from './redux/items/items-selectors';

import Filter from './components/Filter';
import Section from './components/Section';
import Container from './components/Container';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';

function App({
  contacts,
  filter,
  onAddContact,
  onDeleteContact,
  onChangeFilter,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="appTitle">Phonebook</h1>
      <Section>
        <AddContactForm
          onSubmit={value => onAddContact(value)}
          contacts={contacts}
        />
      </Section>
      <Section title="contacts">
        <Filter
          value={filter}
          onChange={e =>
            onChangeFilter(e.currentTarget.value)
          }
        />
        <ContactsList
          contacts={contacts}
          onDeleteContact={value => onDeleteContact(value)}
        />
      </Section>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    contacts: getContactsFilteredItems(state),
    filter: getContactsFilter(state),
    isLoading: getContactsIsLoading(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: value => dispatch(addContact(value)),
    onDeleteContact: value =>
      dispatch(deleteContact(value)),
    onChangeFilter: value => dispatch(changeFilter(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

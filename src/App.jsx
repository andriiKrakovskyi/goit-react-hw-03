import { useState, useEffect } from 'react';
import contactsList from '../db/contactList.json';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import s from './styles/App.module.css';
import Container from '../src/components/Container/Container';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');

    return savedContacts ? JSON.parse(savedContacts) : [...contactsList];
  });

  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => {
      if (
        prev.some(
          (contact) =>
            contact.name.toLowerCase() === newContact.name.toLowerCase(),
        )
      ) {
        iziToast.show({
          title: 'Duplicate Contact',
          titleColor: '#FFF',
          titleSize: '20px',
          titleLineHeight: '24px',
          message: `${newContact.name} is already in contacts.`,
          messageColor: '#FFF',
          messageSize: '16px',
          messageLineHeight: '20px',
          backgroundColor: '#eec511',
          position: 'topRight',
          timeout: 4000,
          maxWidth: 340,
        });

        return prev;
      }
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  const handleFilterChange = (evt) => {
    setFilterValue(evt.target.value);
  };
  // ================
  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()),
  // );
  // ================

  const visibleContacts = contacts.map((contact) => {
    const isMatching = contact.name
      .toLowerCase()
      .includes(filterValue.toLowerCase());

    return {
      ...contact,
      isMatching,
    };
  });

  return (
    <div>
      <Container className={s.app_container}>
        <h1 className={s.app_title}>Phonebook</h1>
      </Container>
      <ContactForm onAdd={addContact} />
      <SearchBox onFilter={handleFilterChange} value={filterValue} />
      <ContactList visibleContacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;

import { useState } from 'react';
// import { useEffect } from 'react';
// import { nanoid } from 'nanoid';

import db from '../db/contactList.json';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import s from './styles/App.module.css';

function App() {
  const [contactData, setContactData] = useState(db);

  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (evt) => {
    evt.preventDefault();
    setFilterValue(evt.target.value);
    console.log(evt.target.value);
  };

  return (
    <div>
      <h1 className={s.app_title}>Phonebook</h1>
      <ContactForm />
      <SearchBox
        handleFilterChange={handleFilterChange}
        filterValue={filterValue}
      />
      <ContactList data={db} />
    </div>
  );
}

export default App;

// ============================

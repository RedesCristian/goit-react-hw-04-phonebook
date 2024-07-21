import React, { useState } from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import FilterContacts from './FilterContacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const addContact = newContact => {
    const contactExists = contacts.some(
      contact => contact.name === newContact.name
    );

    if (!contactExists) {
      setContacts([...contacts, newContact]);
    } else {
      alert('The contact is already in the phonebook');
    }
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
      <FilterContacts filter={filter} onFilterChange={handleFilterChange} />
      <Contacts
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;

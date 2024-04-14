import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import userData from '../../../userData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contact, setContact] = useState(() => {
    const savedContact = window.localStorage.getItem('added-contact');

    return savedContact !== null && savedContact !== '[]'
      ? JSON.parse(savedContact)
      : userData;
  });

  useEffect(() => {
    localStorage.setItem('added-contact', JSON.stringify(contact));
  }, [contact]);

  const deleteItem = itemId => {
    setContact(prevItem => {
      return prevItem.filter(item => item.id !== itemId);
    });
  };

  const addTContact = newContact => {
    setContact(prevContact => {
      return [...prevContact, { ...newContact, id: nanoid() }];
    });
  };

  const filtredItems = contact.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={css.page}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addTContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList data={filtredItems} onDelete={deleteItem} />
    </section>
  );
}

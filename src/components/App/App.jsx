import { useState } from 'react';
import userData from '../../../userData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactFrom/ContactFrom';
import css from './App.module.css';

export default function App() {
  const [contact, setContact] = useState(userData);
  const [filter, setFilter] = useState('');

  const deleteItem = itemId => {
    setContact(prevItem => {
      return prevItem.filter(item => item.id !== itemId);
    });
  };

  const addTContact = newContact => {
    setContact(prevContact => {
      return [...prevContact, newContact];
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

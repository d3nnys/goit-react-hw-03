import { useState, useEffect } from 'react';
import userData from '../../../userData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactFrom/ContactFrom';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contact, setContact] = useState(() => {
    const savedContact = window.localStorage.getItem('added-contact');

    return savedContact !== null ? JSON.parse(savedContact) : userData;
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

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('This field is required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid number format')
      .required('This field is required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <section className={css.page}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        onAdd={addTContact}
        validation={UserSchema}
        initial={initialValues}
      />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList data={filtredItems} onDelete={deleteItem} />
    </section>
  );
}

import { useState } from 'react';
import userData from '../../../userData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

export default function App() {
  const [data, setData] = useState(userData);
  const [filter, setFilter] = useState('');

  const deleteItem = itemId => {
    setData(prevItem => {
      return prevItem.filter(item => item.id !== itemId);
    });
  };

  const filtredItems = data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={css.page}>
      <h1 className={css.title}>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList data={filtredItems} onDelete={deleteItem} />
    </section>
  );
}

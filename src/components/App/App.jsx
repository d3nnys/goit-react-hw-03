// import { useState, useEffect } from 'react';
import userData from '../../../userData.json';
import ContactList from '../ContactList/ContactList';

import css from './App.module.css';

export default function App() {
  return (
    <section className={css.page}>
      <h1 className={css.title}>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox /> */}
      <ContactList userData={userData} />
    </section>
  );
}

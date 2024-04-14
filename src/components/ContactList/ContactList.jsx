import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function ContactList({ data, onDelete }) {
  const [parent] = useAutoAnimate({ easing: 'linear', duration: 300 });

  return (
    <>
      <ul ref={parent} className={css.list}>
        {data.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}

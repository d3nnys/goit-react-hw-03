import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ userData, id }) {
  return (
    <>
      <ul className={css.list}>
        {userData.map(data => (
          <li className={css.item} key={id}>
            <Contact name={data.name} number={data.number} />
          </li>
        ))}
      </ul>
    </>
  );
}

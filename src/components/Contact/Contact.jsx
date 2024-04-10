import { FaUserLarge } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export default function Contact({ name, number }) {
  return (
    <>
      <div>
        <p className={css.name}>
          {' '}
          <FaUserLarge />
          {name}
        </p>
        <p className={css.number}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.btn}>Delete</button>
    </>
  );
}

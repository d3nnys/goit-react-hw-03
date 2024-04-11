import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ data, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        {data.map(data => (
          <li className={css.item} key={data.id}>
            <Contact
              data={data}
              name={data.name}
              number={data.number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

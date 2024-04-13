import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactFrom.module.css';

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'too short !')
    .max(50, 'too long !')
    .required('this field is required !!'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('this field is required !!'),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log(handleSubmit);
    onAdd(values);
    actions.resetForm();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={{
        username: '',
        number: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor="username">Name</label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={nameId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.wrapper}>
          <label htmlFor="number">Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactFrom.module.css';

export default function ContactForm({ onAdd, validation, initial }) {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initial}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor="name">Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrapper}>
          <label htmlFor="number">Number</label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

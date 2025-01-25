/* eslint-disable no-useless-escape */
import s from './ContactForm.module.css';
import Container from '../Container/Container.jsx';
import { nanoid } from 'nanoid';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { PiUserPlusBold } from 'react-icons/pi';
import * as Yup from 'yup';

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const pattern = /^\d{3}-\d{2}-\d{2}$/;

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .required('Це поле має бути не пусте!')
      .min(3, 'Мінімум 3 символи!')
      .max(50, 'Максимум 50 символів!')
      .matches(onlyLetters, 'Тільки літери!'),

    number: Yup.string()
      .required('Це поле має бути не пусте!')
      .min(3, 'Min 3')
      .max(50, 'Max 50')
      .matches(pattern, 'Номер телефону має бути у форматі 123-46-78'),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <section className={s.contactForm_section}>
      <Container className={s.contactForm_container}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={contactFormSchema}
        >
          <Form className={s.contactForm_form}>
            <label className={s.contactForm_label}>
              Name
              <Field
                className={s.contactForm_input}
                name="name"
                type="text"
                placeholder="Rosie Simpson"
              />
              <ErrorMessage
                className={s.contactForm_error}
                component="span"
                name="name"
              />
            </label>

            <label className={s.contactForm_label}>
              Number
              <Field
                className={s.contactForm_input}
                name="number"
                type="tel"
                placeholder="123-45-78"
              />
              <ErrorMessage
                className={s.contactForm_error}
                component="p"
                name="number"
              />
            </label>

            <button
              className={s.contactForm_button}
              aria-label={`Add contact `}
              type="submit"
            >
              <span>Add contact</span>
              <PiUserPlusBold className={s.contactForm_icon_add} size="20" />
            </button>
          </Form>
        </Formik>
      </Container>
    </section>
  );
}

/* eslint-disable no-useless-escape */
import s from './ContactForm.module.css';
import Container from '../Container/Container.jsx';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PiUserPlusBold } from 'react-icons/pi';
import * as Yup from 'yup';

export default function ContactForm() {
  const initialValues = {
    name: '',
    number: '',
    agree: false,
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .required('Це поле має бути не пусте!')
      .min(3, 'Мінімум 3 символи!')
      .max(50, 'Максимум 50 символів!')
      .matches(onlyLetters, 'Тільки літери!'),
    number: Yup.number()
      .required('Це поле має бути не пусте!')
      .min(3, 'Min 3')
      .max(50, 'Max 50'),

    email: Yup.string()
      .required('Це поле має бути не пусте!')
      .matches(re, 'Це не емейл!'),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
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
          {({ values }) => (
            <Form className={s.contactForm_form}>
              <label className={s.contactForm_label}>
                Name
                <Field
                  className={s.contactForm_input}
                  name="name"
                  type="text"
                />
                <ErrorMessage
                  className={s.contactForm_error}
                  component="span"
                  name="name"
                />
              </label>

              <label className={s.contactForm_label}>
                Namber
                <Field
                  className={s.contactForm_input}
                  name="number"
                  type="number"
                />
                <ErrorMessage
                  className={s.contactForm_error}
                  component="p"
                  name="number"
                />
              </label>

              <button
                disabled={!values.agree}
                className={s.contactForm_button}
                aria-label={`Add contact `}
                type="submit"
              >
                <span>Add contact</span>
                <PiUserPlusBold className={s.contactForm_icon_add} size="20" />
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
}

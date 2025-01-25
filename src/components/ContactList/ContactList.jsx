import s from './ContactList.module.css';
import Container from '../Container/Container.jsx';
import Contact from '../Contact/Contact.jsx';

export default function ContactList({ visibleContacts, onDelete }) {
  return (
    <section className={s.contactList_section}>
      <Container className={s.contactList_container}>
        {visibleContacts.length === 0 ? (
          <p className={s.contactList_messege}>No contacts found</p>
        ) : (
          <ul className={s.contactList_list}>
            {visibleContacts.map((visibleContact) => (
              <li key={visibleContact.id}>
                <Contact {...visibleContact} onDelete={onDelete} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

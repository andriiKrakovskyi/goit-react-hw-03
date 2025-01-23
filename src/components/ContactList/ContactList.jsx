import s from './ContactList.module.css';
import Container from '../Container/Container.jsx';
import Contact from '../Contact/Contact.jsx';

export default function ContactList({ data }) {
  return (
    <section className={s.contactList_section}>
      <Container className={s.contactList_container}>
        <ul className={s.contactList_list}>
          {data.map((item) => (
            <Contact {...item} key={item.id} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

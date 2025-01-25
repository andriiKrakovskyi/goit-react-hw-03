# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  // ================================================

  Добавление нового контакта
  Добавление нового контакт без проверки, существует ли уже контакт с таким именем. Это может привести к дублированию записей.

Решение: Перед добавлением проверяйте, есть ли контакт с таким же именем.

// const addContact = (newContact) => {
// setContacts((prev) => {
// return [...prev, newContact];
// });
// };

//-----------
const addContact = (newContact) => {
setContacts((prev) => {
if (
prev.some(
(contact) =>
contact.name.toLowerCase() === newContact.name.toLowerCase(),
)
) {
alert(`${newContact.name} is already in contacts.`);
return prev;
}
return [...prev, newContact];
});
};

     // ================================================

// export default function Contact({ name, number, onDelete, id }) {
// return (
// <li className={s.contact_item}>
// <div className={s.contact_wrapper}>
// <div className={s.contact_info}>
// <PiUserFill className={s.contact_icon} size="20" />

// <p>{name}</p>
// </div>
// <div className={s.contact_info}>
// <PiPhoneFill className={s.contact_icon} size="20" />
// <p>{number}</p>
// </div>
// </div>
// <button
// className={s.contact_button}
// aria-label={`Delete contact ${name}`}
// onClick={() => onDelete(id)}
// >
// <span>Delete</span>
// <PiUserMinusBold className={s.contact_icon} size="20" />
// </button>
// </li>
// );
// }

     // ================================================

// export default function ContactList({ contacts, onDelete }) {
// return (
// <section className={s.contactList_section}>
// <Container className={s.contactList_container}>

// <ul className={s.contactList_list}>

// {contacts.map((contact) => (
// <Contact {...contact} key={contact.id} onDelete={onDelete} />
// ))}
// </ul>

// </Container>
// </section>
// );
// }

     // ================================================

import s from './Contact.module.css';

import { PiPhoneFill } from 'react-icons/pi';
import { PiUserFill } from 'react-icons/pi';
import { PiUserMinusBold } from 'react-icons/pi';

export default function Contact({ name, number, onDelete, id, isMatching }) {
  return (
    <div className={`${s.contact_item} ${!isMatching ? s.no_match : ''}`}>
      <div className={s.contact_wrapper}>
        <div className={s.contact_info}>
          <PiUserFill className={s.contact_icon} size="20" />
          <p>{name}</p>
        </div>
        <div className={s.contact_info}>
          <PiPhoneFill className={s.contact_icon} size="20" />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={s.contact_button}
        aria-label={`Delete contact ${name}`}
        onClick={() => onDelete(id)}
      >
        <span>Delete</span>
        <PiUserMinusBold className={s.contact_icon} size="20" />
      </button>
    </div>
  );
}

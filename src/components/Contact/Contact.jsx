import s from './Contact.module.css';

import { PiPhoneFill } from 'react-icons/pi';
import { PiUserFill } from 'react-icons/pi';
import { PiUserMinusBold } from 'react-icons/pi';

export default function Contact({ name, number }) {
  return (
    <li className={s.contact_item}>
      <div className={s.contact_wrapper}>
        <div className={s.contact_info}>
          <PiUserFill className={s.contact_icon} size="20" />
          {/* <p>abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzab</p> */}

          {/* <p> ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZAB</p> */}
          <p>{name}</p>
        </div>
        <div className={s.contact_info}>
          <PiPhoneFill className={s.contact_icon} size="20" />
          <p>{number}</p>

          {/* <p>01234567890123456789012345678901234567</p> */}
        </div>
      </div>
      <button
        className={s.contact_button}
        aria-label={`Delete contact ${name}`}
      >
        <span>Delete</span>
        <PiUserMinusBold className={s.contact_icon} size="20" />
      </button>
    </li>
  );
}

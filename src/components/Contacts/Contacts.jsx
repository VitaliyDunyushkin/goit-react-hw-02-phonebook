import React from 'react';
import { nanoid } from 'nanoid';

import css from './contacts.module.css';

export default function Contacts({ contacts, searchValue }) {
  const searchValueInLowerCase = searchValue.toLowerCase();

  const contactsFiltered = contacts.filter(contact => {
    const nameInLowerCase = contact.name.toLowerCase();
    return nameInLowerCase.includes(searchValueInLowerCase);
  });

  return (
    <>
      <ul className={css.contactsList}>
        {contactsFiltered.map(({ name, number }) => {
          return (
            <li key={nanoid()}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </>
  );
}

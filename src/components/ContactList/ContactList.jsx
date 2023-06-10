import React from 'react';

import css from './contactList.module.css';
import ContactItem from './ContactItem/ContactItem';

export default function ContactList({ contacts, searchValue, onClick }) {
  const searchValueInLowerCase = searchValue.toLowerCase();

  const contactsFiltered = contacts.filter(contact => {
    const nameInLowerCase = contact.name.toLowerCase();
    return nameInLowerCase.includes(searchValueInLowerCase);
  });

  return (
    <ul className={css.contactsList}>
      {contactsFiltered.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

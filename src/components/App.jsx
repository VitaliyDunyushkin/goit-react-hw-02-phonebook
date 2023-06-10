import React, { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = contact => {
    // console.log(contact.name);
    const searchContactName = contact.name;
    const message = searchContactName + ' is already in contacts';
    const contactWithId = { ...contact, id: nanoid() };

    if (
      this.state.contacts.find(contact => contact.name === searchContactName)
    ) {
      alert(message);
    } else {
      this.setState({ contacts: [...this.state.contacts, contactWithId] });
    }
  };

  searchHandler = event => {
    // console.log('searchHandler >>', event.target.value);
    this.setState({ filter: event.target.value });
    // console.log(this.state.filter);
  };

  handleDelete = id => {
    // console.log('in App >>', id);
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.formSubmitHandler} />
        <hr />

        <h2>Contacts</h2>
        <Filter onSearch={this.searchHandler} value={this.state.filter} />
        <ContactList
          contacts={contacts}
          searchValue={filter}
          onClick={this.handleDelete}
        />
      </>
    );
  }
}

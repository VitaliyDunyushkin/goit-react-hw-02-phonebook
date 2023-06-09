import React, { Component } from 'react';

import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

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
    // console.log(contact);
    this.setState({ contacts: [...this.state.contacts, contact] });
  };

  searchHandler = event => {
    console.log('searchHandler >>', event.target.value);
    this.setState({ filter: event.target.value });
    // console.log(this.state.filter);
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <Phonebook onFormSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onSearch={this.searchHandler} value={this.state.filter} />
        <Contacts contacts={contacts} searchValue={filter} />
      </>
    );
  }
}

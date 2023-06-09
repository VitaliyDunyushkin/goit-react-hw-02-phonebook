import React, { Component } from 'react';
import css from './phonebook.module.css';

export default class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
              ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe,
      dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de
      Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

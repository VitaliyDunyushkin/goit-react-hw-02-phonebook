import React, { Component } from 'react';

import css from './filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <>
        <h3 className={css.title}>Find contacts by name</h3>
        <input
          className={css.input}
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onSearch}
          title="Search contacts"
        />
      </>
    );
  }
}

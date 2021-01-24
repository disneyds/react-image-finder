import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="header">
        <p className="title">Polaroid is BACK!</p>
        <form
          className="search-form"
          id="search-form"
          onSubmit={this.onSubmitForm}
        >
          <input
            className="form-input form-control"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Найти изображение..."
            onChange={this.handleChange}
            value={this.state.query}
          />

          <button className="btn btn-warning btn-sub" type="submit">
            <span
              className=" spinner spinner-border spinner-border-sm is-hidden"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="label">Найти</span>
          </button>
        </form>
      </header>
    );
  }
}

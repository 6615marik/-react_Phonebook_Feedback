import { Component } from 'react';
// import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  inputName = e => {
    this.setState({ name: e.target.value });
  };
  inputNumber = e => {
    this.setState({ number: e.target.value });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.inputName}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.inputNumber}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

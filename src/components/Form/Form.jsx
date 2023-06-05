import React from 'react';
import { LabelValue, Btn, FormField, Label, Input } from './Form.styled';
import PropTypes from 'prop-types';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  changeInputHandler = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  submitFormHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <>
        <FormField onSubmit={this.submitFormHandler}>
          <Label>
            <LabelValue>Name</LabelValue>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.changeInputHandler}
              value={this.state.name}
            />
          </Label>
          <Label>
            <LabelValue>Number</LabelValue>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.changeInputHandler}
              value={this.state.number}
            />
          </Label>

          <Btn type="submit" name="submit">
            Add contact
          </Btn>
        </FormField>
      </>
    );
  }
}

export default Form;

Form.propTypes = {
  addContact: PropTypes.func,
};

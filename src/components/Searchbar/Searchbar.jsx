import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.props.onSubmit;
  }
  state = {
    value: '',
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = e => {
    e.preventDefault();
    this.onSubmit(this.state.value);
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.submitForm}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            name="value"
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;

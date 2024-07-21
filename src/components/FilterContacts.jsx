import React from 'react';
import styles from './FilterContacts.module.css';
import PropTypes from 'prop-types';

const FilterContacts = ({ filter, onFilterChange }) => {
  return (
    <form className={styles.formContainer}>
      <label className={styles.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        id="search"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      />
    </form>
  );
};
FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterContacts;

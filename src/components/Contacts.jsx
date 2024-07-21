import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.contactName}>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li className={styles.contactItem} key={contact.id}>
            {contact.name} : {contact.number}
            <button
              className={styles.deleteButton}
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;

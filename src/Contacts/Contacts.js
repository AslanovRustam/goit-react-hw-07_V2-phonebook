import s from './contacs.module.css';
import { connect } from 'react-redux';
import contactActions from '../redux/actions';

const Contactlist = ({ contacts, onDeleteContact }) => {
  return (
    <div className={s.contactsList}>
      <h2 className={s.contactsTitle}>Contacts</h2>
      <span>Total number of contacts - {contacts.length}</span>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            {name} {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              <span>Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

// const filteredContacts = getFilteredContacts();

const mapStateToProps = state => {
  const { filter, contacts } = state.contacts;
  // const normalizedFilter = filter.toLowerCase();
  const filteredContacts = getFilteredContacts(contacts, filter);
  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contactlist);

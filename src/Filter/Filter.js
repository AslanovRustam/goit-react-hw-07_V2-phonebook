import s from './filter.module.css';
import { connect } from 'react-redux';
import contactActions from '../redux/actions';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.section}>
      <label>
        Find Contacts by name
        <input
          type="text"
          className={s.input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

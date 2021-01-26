import Form from './Form/Form';
import Contactlist from './Contacts/Contacts';
import Filter from './Filter/Filter';
import s from './app.module.css';
import { connect } from 'react-redux';
import addContact from './redux/actions';

function App() {
  return (
    <div className={s.mainSection}>
      <Form onSubmit={addContact} />
      <Filter />

      <Contactlist />
    </div>
  );
}

export default connect()(App);

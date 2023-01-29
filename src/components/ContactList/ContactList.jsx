import css from './ContactList.module.css';
import ContactItem from './ContactItem';
import { PropTypes } from 'prop-types';
import { removeContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={css.container}>
      {visibleContacts.map(({ id, name, phone }, index) => (
        <ContactItem
          key={id}
          name={name}
          number={phone}
          idx={id}
          onRemove={() => {
            dispatch(removeContacts(id));
          }}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemove: PropTypes.func,
};
export default ContactList;

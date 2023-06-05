import { List } from './Contacts.styled';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <>
      {contacts.length > 0 && (
        <List>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

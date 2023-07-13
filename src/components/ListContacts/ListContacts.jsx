import { ItemListContact } from "components/ItemListContact/ItemListContact"
import { List } from "./ListContacts.styled"
import PropTypes from 'prop-types'

export const ListContacts = ({contacts, handleDelete}) => {
    return(
        <List>
            {contacts.map(contact => (<ItemListContact 
            key={contact.id}
            id={contact.id} 
            name={contact.name} 
            number={contact.number}
            handleDelete={handleDelete}/>
           ))}
        </List>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        }).isRequired),
    handleDelete: PropTypes.func.isRequired}
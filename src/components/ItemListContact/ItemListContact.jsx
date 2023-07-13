import PropTypes from 'prop-types'
import { Item, Button } from "./itemListContact.styled"

export const ItemListContact = ({id, name, number, handleDelete}) => {
    return(
        <Item>
                {name}: {number}
                <Button type='button' onClick={() => handleDelete(id)}>Delete</Button>
            </Item>
    )
}

ItemListContact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired}
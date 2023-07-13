import PropTypes from 'prop-types'
import { Container, Label, Input } from "./Filter.styled"
export const Filter = ({filter, handleFilter}) => {
    return(
        <Container>
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="name"
                placeholder="name"
                value={filter}
                onChange={handleFilter}
                />
        </Label>
        </Container>
        
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired}
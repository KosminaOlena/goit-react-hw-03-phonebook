import { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Label, Input, Button } from "./FormContact.styled"

class FormContact extends Component{
    state = {
        name: '',
        number: ''
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createContact({
            name: this.state.name,
            number: this.state.number
        })
        this.setState({
            name: '',
            number: '' 
         })
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
            <Label htmlFor="777">Name</Label>
            <Input
                type="text"
                name="name"
                placeholder="name"
                id="777"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={this.state.name}
            />
            <Label htmlFor="888">Number</Label>
            <Input
                type="tel"
                name="number"
                placeholder="number"
                id="888"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={this.state.number}
            />
            <Button type='submit'>Add contact</Button>
        </Form>
        )
    }
}
export default FormContact

FormContact.propTypes = {
    createContact: PropTypes.func.isRequired}

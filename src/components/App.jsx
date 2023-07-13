import { Component } from 'react'
import { nanoid } from 'nanoid'
import FormContact from './FormContact/FormContact'
import { Container } from './App.styled'
import { ListContacts } from './ListContacts/ListContacts'
import {Filter} from './Filter/Filter'

class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    if(localStorage.getItem('listContacts'))
    this.setState({
      contacts: JSON.parse(localStorage.getItem('listContacts'))
    })
    
    // Альтернатива
    // const stringifyContacts = localStorage.getItem('listContacts');
    // const contacts = JSON.parse(stringifyContacts) ?? [];   ------- оператор нульового злиття
    // this.setState({contacts})
  }

  componentDidUpdate(_, prevState){
    if (prevState.contacts.length !== this.state.contacts.length)
    localStorage.setItem('listContacts', JSON.stringify(this.state.contacts))
  }

  deleteContact = (idItem) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({id}) => id !== idItem)
    }))
  }

  createContact = (data) => {
    const checkName = this.state.contacts.find(({name}) => name.toLowerCase() === data.name.toLowerCase())
    if(checkName){
      alert(`${data.name} is already in contacts`)
      return
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }]
    }))
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  onFilter = () => {
    const {filter, contacts} = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ); 
  }

  render(){
    const filteredContacts = this.onFilter();

    return(
      <Container>
        <h1>Phonebook</h1>
        <FormContact createContact = {this.createContact}/>
        <h2>Contacts</h2>
        <Filter filter = {this.state.filter} handleFilter = {this.handleFilter}/>
        <ListContacts contacts = { filteredContacts } handleDelete = {this.deleteContact}/>
      </Container>
    )
  }
}

export default App
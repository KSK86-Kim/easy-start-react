import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: '',
    };

    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.contacts.some(({ name }) => name === this.state.name)) {
            alert(`${this.state.name} is already in contacts.`);
            event.currentTarget.reset();
            return;
        }
        this.setState(prevState => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        name: prevState.name,
                        number: prevState.number,
                        id: uuidv4(),
                    },
                ],
            };
        });
        event.currentTarget.reset();
    };

    handleInputChange = event => {
        const fieldType = event.target.name;
        const fieldContent = event.target.value;
        this.setState({ [fieldType]: fieldContent });
    };

    handleFilterChange = event => {
        const filterValue = event.target.value.toLowerCase();
        this.setState({ filter: filterValue });
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter),
        );
    };

    deleteConact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    render() {
        return (
            <div className="App">
                <div>
                    <h1>Phonebook</h1>
                    <ContactForm
                        onFormSubmit={this.onFormSubmit}
                        inputHandler={this.handleInputChange}
                    />
                    <h2>Contacts</h2>
                    <ContactList
                        contacts={this.getFilteredContacts()}
                        deleteContactHandler={this.deleteConact}
                    >
                        <Filter filterHandler={this.handleFilterChange} />
                    </ContactList>
                </div>
            </div>
        );
    }
}

export default App;

/// axios

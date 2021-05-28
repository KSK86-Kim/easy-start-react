import React, { Component, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

//////
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Container from './components/Container';
import Section from './components/Section';

//////

class App extends Component {
    state = {};

    render() {
        return (
            <Fragment>
                <Header />
                <Main>
                    <Section title="Phonebook">
                        <Container></Container>
                    </Section>
                </Main>
                <Footer />
            </Fragment>
        );
    }
}

export default App;

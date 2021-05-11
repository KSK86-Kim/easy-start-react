import React, { Component } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Main>
                    <Container>123</Container>
                    <Container>123</Container>
                    <Container>123</Container>
                </Main>
                <Footer />
            </>
        );
    }
}

export default App;

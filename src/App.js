import React, { Component, Fragment } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Main>
                    <Container>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aperiam nemo blanditiis neque quod modi ducimus
                        eveniet, alias eius porro voluptas, qui quasi, ipsa
                        tempora quaerat hic natus ratione ut incidunt?
                    </Container>
                    <Container>123</Container>
                    <Container>123</Container>
                </Main>
                <Footer />
            </Fragment>
        );
    }
}

export default App;

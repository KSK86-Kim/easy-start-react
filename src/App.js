import React, { Component, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { v4 as uuidv4 } from 'uuid';

//////
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Container from './components/Container';
import Section from './components/Section';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';

//////
import { fetchImages } from './services/gallery-api';

class App extends Component {
    state = {
        modalIsOpen: false,
        searchQuery: '',
        imagesArray: [],
        largeImageURL: '',
        nextPage: 1,
        isLoading: false,
        error: false,
        errorMsg: '',
        pageSize: 12,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.pageLoad();
        }
    }

    pageLoad = () => {
        const { searchQuery, nextPage, pageSize } = this.state;
        const ontions = {
            searchQuery,
            nextPage,
            pageSize,
        };
        this.setState({ isLoading: true, error: false });
        fetchImages(ontions)
            .then(newImages =>
                this.setState(prevState => {
                    return {
                        imagesArray: [...prevState.imagesArray, ...newImages],
                        nextPage: prevState.nextPage + 1,
                    };
                }),
            )
            .catch(error => {
                this.setState({ error: true, errorMsg: error.messge });
            })
            .finally(() => {
                this.setState({ isLoading: false });
                if (this.state.nextPage > 2)
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    });
            });
    };

    onChangeQuery = query => {
        if (this.state.searchQuery === query) {
            return;
        }
        this.setState({
            searchQuery: query,
            imagesArray: [],
            largeImageURL: '',
            nextPage: 1,
        });
    };

    onThumbClick = e => {
        this.setState({
            modalIsOpen: true,
            largeImageURL: e.target.dataset.largeimageurl,
        });
    };
    onModalClick = e => {
        if (e.target === e.currentTarget) {
            this.setState({ modalIsOpen: false });
        }
    };
    onEscClick = e => {
        if (e.code === 'Escape') {
            this.setState({
                modalIsOpen: false,
            });
        }
    };
    render() {
        const {
            modalIsOpen,
            imagesArray,
            isLoading,
            error,
            errorMsg,
            largeImageURL,
        } = this.state;
        return (
            <Fragment>
                <Header />
                <Main>
                    <Section title="Image finder">
                        <Container>
                            <Searchbar onSubmit={this.onChangeQuery} />
                            <ImageGallery
                                images={imagesArray}
                                onThumbClick={this.onThumbClick}
                                isLoading={isLoading}
                            />
                            {/* <Button onClick={this.pageLoad} /> */}
                            {isLoading && (
                                <div className="spinner">
                                    <Loader
                                        type="Rings"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        visible={true}
                                    />
                                </div>
                            )}
                            {error && (
                                <Fragment>
                                    <p className="error-message">
                                        Oops, something went wrong...
                                    </p>
                                    <p className="error-message">{errorMsg}</p>
                                </Fragment>
                            )}
                            {imagesArray.length > 0 && !error && (
                                <Button onClick={this.pageLoad} />
                            )}
                            {modalIsOpen && (
                                <Modal
                                    imageUrl={largeImageURL}
                                    onModalClick={this.onModalClick}
                                    onEscClick={this.onEscClick}
                                />
                            )}
                        </Container>
                    </Section>
                </Main>
                <Footer />
            </Fragment>
        );
    }
}

export default App;

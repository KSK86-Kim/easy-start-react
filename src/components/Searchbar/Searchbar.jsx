import React from 'react';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
    state = {
        query: '',
    };

    onInputChange = event => {
        this.setState({ query: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { onSubmit } = this.props;
        if (this.state.query) onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <div className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        );
    }
}

Searchbar.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;

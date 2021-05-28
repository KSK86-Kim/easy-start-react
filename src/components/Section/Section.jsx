import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <section>
                <h2 className={styles['title']}>{title}</h2>
                {children}
            </section>
        );
    }
}
Section.propTypes = {
    title: PropTypes.string,
};

export default Section;

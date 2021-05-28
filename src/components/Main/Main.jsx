import React from 'react';
import styles from './Main.module.css';

const Main = ({ children }) => {
    return <header className={styles['main']}>{children}</header>;
};

export default Main;

import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, borderClass }) => {
    const totalsClass = [styles.container];
    return <div className={totalsClass}>{children}</div>;
};

export default Container;

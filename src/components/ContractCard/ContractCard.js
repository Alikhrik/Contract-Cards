import React from 'react';
import styles from './ContractCard.module.css';

export function ContractCard(props) {
    const dinamicStyles = {
        backgroundColor: props.color
    };
    return (
        <div className={styles.body}>
            <div style={dinamicStyles} className={styles.title}>
                {props.title}
                <div className={styles.price}>{props.price}</div>
            </div>
            <ul>
                {props.clauses.map((clause) => (
                    <li className={clause.active ? styles.active : styles['not-active']}>
                        {clause.text}
                    </li>
                ))}
            </ul>
            <div style={dinamicStyles} className={styles['select-btn']}>
                Select Package
            </div>
        </div>
    );
}
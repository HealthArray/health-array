import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ title, to }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`${styles['card']}`}
            onClick={() => { navigate(to) }}
        >
            {title.split(' ').map(word => <div>{word}</div>)}
        </div>
    )
}

export default Card
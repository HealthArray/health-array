import React from 'react';
import Card from '../components/Card';
import styles from './Home.module.css'

const Home = () => {
    const cards = [
        {
            title: 'Insulin Calculator',
            to: 'insulin-calculator'
        },
    ]

    return (
        <div className='page'>
            <div
                className='hero-section'
            >
                <div className='hero-title'>
                    <span className='green'>Health</span>
                    <span className='blue'>Array</span>
                </div>
                <p>All your health tools, at one place!</p>
            </div>
            <div
                className={`${styles['cards']}`}
            >
                {
                    cards.map((card) => <Card title={card.title} to={card.to} />)
                }
            </div>
        </div>
    )
}

export default Home;
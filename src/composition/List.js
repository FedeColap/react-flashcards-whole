import React from 'react';
import './List.css';
import './Card.js';
import Card from './Card.js';


function List (props) {
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card =>
                    <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}>    
                    </Card>
                    ))}
            </div>
            <button type='button' className='List-add-button'>
              + Add Random Card
            </button>
        </section>
    )
}

export default List;
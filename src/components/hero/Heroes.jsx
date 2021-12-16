import React from 'react';
import Hero from './Hero';

const Heroes = ({heroes}) => {

    return (
        <div>
            {heroes.map((hero, index) => <Hero key={index} hero={hero}/>)}
        </div>
    )
}

export default Heroes;
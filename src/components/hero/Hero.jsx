import React from 'react';

const Hero = ({hero}) => {

    return (
        <div>
            <h2>{hero.nickname}</h2>
            <p>{hero.name}</p>
        </div>
    );
}

export default Hero;
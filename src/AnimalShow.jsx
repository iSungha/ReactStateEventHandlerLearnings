import React from 'react'
import bird from "./Images/bird.svg";
import cat from './Images/cat.svg';
import cow from './Images/cow.svg';
import dog from './Images/dog.svg';
import gator from './Images/gator.svg';
import heart from './Images/heart.svg';
import horse from "./Images/horse.svg";
import { useState } from 'react';
import "./CSS/AnimalShow.css"

//When key and value are identical, we can write one word for key value pair. eg for bird : bird we can just bird
const imagesMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}
const AnimalShow = (Animal) => {
    const animalName = Animal.name;

    const [size, setSize] = useState(0);

    const clickHandler = () => {
        setSize(size + 1);
    };

    return (
        <div className='animaShow' onClick={clickHandler}>
            <img className="animal" src={imagesMap[animalName]} alt='Animal' />
            <img 
                className='Like'
                alt='heart'
                src={heart}
                style={{ width: 10 + 10 * size + 'px' }}
            />
        </div>
    );
}

export default AnimalShow;
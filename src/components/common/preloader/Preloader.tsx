import React from 'react';
import s from './Preloader.module.css'
import spinner from '../../../assets/images/spinner.jpg'


export const Preloader = () => {

    return (
        <div className={s.preloader}>
            <img src={spinner}
                 alt={'loading...'}/>
        </div>
    );
};



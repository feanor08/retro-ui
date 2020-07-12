import React from 'react';
import './nes-container.scss';

const NESContainer = ({children, containerTitle="Title Here", titlePosition="3%"}) =>{
    return(
        <div className="nes-container">
            <div className="container-contents">
                {children}
            </div>
            <div className="container-title" style={{left:`${titlePosition}`}}>{containerTitle}</div>
        </div>
    )
}

export default NESContainer;
import React from 'react';
import './nes-text.scss';

const NESText = ({children,color='black'}) =>{
    return(
        <span className="nes-text" style={{color:color}}>{children}</span>
    )
}

export default NESText;
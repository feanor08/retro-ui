import React from 'react';
import './nes-container.scss';

const NESContainer = ({children, containerTitle="Title Here", titlePosition="3%", containerType="white"}) =>{
    const blackContainer = {
        textColor:'white',
        border:'4px solid white',
        backgroundColor:'black'
    }
    const whiteContainer = {
        textColor:'black',
        border:'4px solid black',
        backgroundColor:'white'
    }
    let currentContainer ={};
    const currentContainerSelector =(containerType)=>{
        let currentContainer;
        switch (containerType) {
            case "black":
                return blackContainer;
            case "white":
               return whiteContainer;
            default:
                break;
        }
        return currentContainer;
    }
    return(

        <div className="nes-container" style={{backgroundColor:currentContainerSelector(containerType).backgroundColor,color:currentContainerSelector(containerType).textColor}}>
           <div className="container-title" style={{left:`${titlePosition}`,backgroundColor:currentContainerSelector(containerType).backgroundColor}}>{containerTitle}</div>
            <div className="container-contents" style={{border:currentContainerSelector(containerType).border}}>
                {children}
            </div>
            
        </div>
    )
}

export default NESContainer;
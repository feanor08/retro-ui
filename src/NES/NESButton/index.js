import React from "react";
import './nes-button.scss';
import './disabled-button.scss';
import './active-button.scss';

import { useRef, useState, useEffect } from 'react';


// ***Predefined Button Properties***
//Normal Button and Default
const normalButtonColors = {
    bottom: 'black',
    shadow: 'rgb(173, 175, 188)',
    top:'white',
    selected:'rgb(231, 231, 231)',
    text:'black'
}

//BlueButton
const blueButtonColors = {
    bottom: 'black',
    shadow: 'rgb(0, 107, 179)',
    top:'rgb(32, 156, 238)',
    selected:'rgb(16, 141, 224)',
    text:'white'

}

//Warning Button
const warningButtonColors = {
    bottom: 'black',
    shadow: 'rgb(229, 148, 0)',
    top:'rgb(247, 213, 29)',
    selected:'rgb(242, 196, 9)',
    text:'black'

}

//Success Button
const successButtonColors = {
    bottom: 'black',
    shadow: 'rgb(74, 165, 46)',
    top:'rgb(146, 204, 65)',
    selected:'rgb(118, 196, 66)',
    text:'white'

}

//Error Button
const errorButtonColors = {
    bottom: 'black',
    shadow: 'rgb(140, 32, 34)',
    top:'rgb(231, 110, 85)',
    selected:'rgb(206, 55, 43)',
    text:'white'
}

//Disabled Button
const disabledButtonColors = {
    bottom: 'rgb(121, 123, 126)',
    shadow: 'rgb(205, 206, 214)',
    top:'rgb(228, 228, 228)',
    selected:'rgb(228, 228, 228)',
    text:'rgb(121, 123, 126)'
}

//Hover Hook Function
function useHover() {
    const [value, setValue] = useState(false);
  
    const ref = useRef(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(
      () => {
        const node = ref.current;
        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);
  
          return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );
  
    return [ref, value];
}

//Generates Style Class for buttons
const styleClassToUse = (buttonType) => {   
    switch(buttonType){
        case "blue":
            return blueButtonColors;
            break;
        case "warning":
            return warningButtonColors;
            break;
        case "success":
            return successButtonColors;
            break;
        case "error":
            return errorButtonColors;
            break;
        case "disabled":
            return disabledButtonColors;
            break;
        default:
            return normalButtonColors;
        break;
    }
}

//Check if Button type is Disabled or Active
const isButtonDisabledOrActive=(btnType,isBtnActive)=>{
    if(btnType==='disabled')
        return 'button-disabled';
    else if(isBtnActive===true)
        return 'button-active';
    else
        return 'button-normal';
}

const customButtonColors = (customBackColor,customShadowColor,customTopColor,customTopSelectedColor,customTextColor)=>{
    return {
        bottom: customBackColor,
        shadow: customShadowColor,
        top:customTopColor,
        selected:customTopSelectedColor,
        text:customTextColor
    }
}

//Generate Button Dimensions
const buttonDimensions=(btnSize)=>{
    return {
        width:`${btnSize}px`,
        height:`${btnSize/3}px`
    }
}


function NESButton({btnType="normal",children, btnSize='300', isBtnActive=false, customBackColor='black', customShadowColor='rgb(173, 175, 188)', customTopColor='white',customTopSelectedColor='rgb(231, 231, 231)',customTextColor='black'}) {

    const [hoverRef, isHovered] = useHover();

    const currentButtonColors=btnType==="custom"?customButtonColors(customBackColor,customShadowColor,customTopColor,customTopSelectedColor,customTextColor): styleClassToUse(btnType);



    return (
        <div className={isButtonDisabledOrActive(btnType,isBtnActive)} 
        ref={hoverRef} 
        style={buttonDimensions(btnSize)} >
            <div className="black-fat" style={{backgroundColor:`${currentButtonColors.bottom}`}} />
            <div className="black-tall" style={{backgroundColor:`${currentButtonColors.bottom}`}} />
            <div className="middle" style={{backgroundColor:`${ currentButtonColors.shadow}`}}>

                <div className="top"  style={{backgroundColor:`${isHovered && !isBtnActive? currentButtonColors.selected :(isBtnActive?currentButtonColors.selected :currentButtonColors.top)}`}}  />
                <div className={`${btnType==='disabled'?'bar-w':' '}`} style={{backgroundColor:`${btnType==='disabled'? (currentButtonColors.top? currentButtonColors.top:currentButtonColors.top):'transparent'}`}}/>
                <div className={`${btnType==='disabled'?'bar-h':' '}`} style={{backgroundColor:`${btnType==='disabled'? (currentButtonColors.top? currentButtonColors.top:currentButtonColors.top):'transparent'}`}}/>

            </div>
            <p style={{color:`${currentButtonColors.text}`,fontSize:`${isHovered && !isBtnActive?btnSize/14.5:(isBtnActive?btnSize/14.5: btnSize/16)}px`,
            letterSpacing:`${btnSize/75}px`}}>
                {children}
            </p>
        </div>
    );
    }   


export default NESButton;
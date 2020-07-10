import React from "react";
import './nes-button.scss';
import './disabled-button.scss';
import { useRef, useState, useEffect } from 'react';

const normalButtonColors = {
    bottom: 'black',
    shadow: 'rgb(173, 175, 188)',
    top:'white',
    selected:'rgb(231, 231, 231)',
    text:'black'
}

const blueButtonColors = {
    bottom: 'black',
    shadow: 'rgb(0, 107, 179)',
    top:'rgb(32, 156, 238)',
    selected:'rgb(16, 141, 224)',
    text:'white'
}

const warningButtonColors = {
    bottom: 'black',
    shadow: 'rgb(229, 148, 0)',
    top:'rgb(247, 213, 29)',
    selected:'rgb(242, 196, 9)',
    text:'black'
}

const successButtonColors = {
    bottom: 'black',
    shadow: 'rgb(74, 165, 46)',
    top:'rgb(146, 204, 65)',
    selected:'rgb(118, 196, 66)',
    text:'white'
}

const errorButtonColors = {
    bottom: 'black',
    shadow: 'rgb(140, 32, 34)',
    top:'rgb(231, 110, 85)',
    selected:'rgb(206, 55, 43)',
    text:'white'
}
const disabledButtonColors = {
    bottom: 'rgb(121, 123, 126)',
    shadow: 'rgb(205, 206, 214)',
    top:'rgb(228, 228, 228)',
    selected:'rgb(228, 228, 228)',
    text:'rgb(121, 123, 126)'
}

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


function NESButton({btnType, btnText, btnSize, btnTextColor}) {
    const [hoverRef, isHovered] = useHover();
    btnSize=btnSize?btnSize:'400';
    var currentButtonColors 
    switch(btnType){
        case "blue":
            currentButtonColors = blueButtonColors;
            break;
        case "warning":
            currentButtonColors= warningButtonColors;
            break;
        case "success":
            currentButtonColors= successButtonColors;
            break;
        case "error":
            currentButtonColors= errorButtonColors;
            break;
        case "disabled":
            currentButtonColors= disabledButtonColors;
            break;
        default:
            currentButtonColors=normalButtonColors;
        break;
    }
    return (
        <div className={`${btnType==='disabled'?'button-disabled':'button-normal'}`} 
        ref={hoverRef} 
        style={{width:`${btnSize}px`,height:`${btnSize/3}px`}} >
            <div className="black-fat" style={{backgroundColor:`${currentButtonColors.bottom}`}} />
            <div className="black-tall" style={{backgroundColor:`${currentButtonColors.bottom}`}} />
            <div className="middle" style={{backgroundColor:`${ currentButtonColors.shadow}`}}>
                <div className="top"  style={{backgroundColor:`${isHovered? currentButtonColors.selected :currentButtonColors.top}`}}  />
                <div className={`${btnType==='disabled'?'bar-w':' '}`} style={{backgroundColor:`${btnType==='disabled'? (currentButtonColors.top? currentButtonColors.top:currentButtonColors.top):'transparent'}`}}/>
                <div className={`${btnType==='disabled'?'bar-h':' '}`} style={{backgroundColor:`${btnType==='disabled'? (currentButtonColors.top? currentButtonColors.top:currentButtonColors.top):'transparent'}`}}/>

            </div>
            <p style={{color:`${btnTextColor?btnTextColor:currentButtonColors.text}`,
            fontSize:`${isHovered?btnSize/12:btnSize/16}px`,
            letterSpacing:`${btnSize/75}px`}}>
                {btnText?btnText:"button"}
            </p>
        </div>
    );
}   
export default NESButton;
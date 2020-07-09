import React from "react";
import './nes-button.css';

const normalButton = {
    bottom: 'black',
    shadow: 'rgb(173, 175, 188)',
    top:'white',
    selected:'rgb(231, 231, 231)'
};


function NESButton() {
  return (
    <div class="button-normal" >
      <div class="black-fat" style={normalButton.bottom}/>
      <div class="black-tall" style={normalButton.bottom}/>
      <div class="middle" style={normalButton.shadow}>
        <div class="top" style={normalButton.top}/>
      </div>
      <p>feanor</p>
    </div>
  );
}



export default NESButton;
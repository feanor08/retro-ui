import React from "react";
import './nes-button.scss';

const normalButton = {
    bottom: 'black',
    shadow: 'rgb(173, 175, 188)',
    top:'white',
    selected:'rgb(231, 231, 231)'
};


function NESButton() {
  return (
    <div class="button-normal" >
      <div class="black-fat" />
      <div class="black-tall" />
      <div class="middle">
        <div class="top" />
      </div>
      <p>feanor</p>
    </div>
  );
}



export default NESButton;
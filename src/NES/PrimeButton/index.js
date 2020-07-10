import React from 'react';
import './prime-button.scss';

const normalButton = {
  bottom: 'black',
  shadow: 'rgb(173, 175, 188)',
  top: 'white',
  selected: 'rgb(231, 231, 231)',
};

function PrimeButton() {
  return (
    <div class="button-prime">
      <div class="black-fat" />
      <div class="black-tall" />
      <div class="middle">
        <div class="top" />
      </div>
      <p>Prime</p>
    </div>
  );
}

export default PrimeButton;

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
  
  for(let i=0; i < who.length; i++) {
      for(let j=0; j < action.length; j++) {
          for(let k=0; k < what.length, k++){
            for(let l=0; l < when.length, l++){
              console.log(who[i] + action[j] + what[k] + when[l]);
          }
      }
    }
  };
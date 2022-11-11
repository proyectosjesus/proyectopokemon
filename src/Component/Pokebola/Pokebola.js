import "./Pokebola.css";
import Stadisticas from "../Stadisticas/Stadisticas";
import anime from 'animejs/lib/anime.es.js';
import { useState, useEffect } from "react";
import axios from "axios";
function Pokebola() {
  var [estadoboton, setestadoboton] = useState(false);
  var [pokemonID, setpokemonID] = useState(1);
  var [pokemonnombre, setpokemonnombre] = useState(1);
  var [pokemonimg, setpokemonimg] = useState();
  var [pokemonhistoria, setpokemonhistoria] = useState();
  var [pokemontipo, setpokemontipo] = useState([]);
  const time = async () => {
    var timeout = setTimeout(alertFunc, 2200);
   
  }
  function alertFunc() {
    setestadoboton(estadoboton=false)
    
  }
  
  const boton = async (e) => {
    setestadoboton(estadoboton=true)
     
    anime({
      targets: ".imagen",
      keyframes: [
        { translateX: 0, opacity: 0, duration: 1, scale: 1,rotate: "1turn"},
        {
          translateX: -400,
          scale: 1,
          rotate: "1turn",
          opacity: 1,
          duration: 2400,
        },
      ],
    });
    anime({
      targets: '.animepokearriba',
      translateY: -10,
      direction: 'alternate',
      easing: 'easeInOutSine'
    
    });
    anime({
      targets: '.animepokeabajo',
      translateY: 10,
      direction: 'alternate',
      easing: 'easeInOutSine',
     
    
    });
    if(pokemonID==150){
      console.log("hay 150 pokemon reinicie")
      pokemonID=1;
    }
    console.log(pokemonID);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
  .then(function (response) {
    // handle success
    setpokemonimg(pokemonimg=response.data.sprites.front_default);
    setpokemonnombre(pokemonnombre=response.data.species.name);
    setpokemontipo(pokemontipo=response.data.types);
   
    axios.get(response.data.species.url)
    .then(function (response) { 
      setpokemonhistoria(response.data.flavor_text_entries[59].flavor_text);
     
     })
  })
  setpokemonID(pokemonID+1);
    time();
    console.log("boton funcionando")
  }

  return (
    <>
      <div className="logo">
        <img src="./img/pokemon.png"></img>
      </div>
      <div className="marco">
        <div className="pokebola">
          <div className="rojo animepokearriba"></div>
          <div className="malla" >
          <img src="./img/malla.jpg"></img>
          </div>
          <button className="boton animepokearriba" disabled= {estadoboton==false? false: true} onClick={() => boton()}></button>
          <div className="imagen" >
          <img src={pokemonimg}></img>
          </div>
          <div className="blanco animepokeabajo"></div>
        </div>
        <Stadisticas nombre={pokemonnombre} historia={pokemonhistoria} tipo={pokemontipo}></Stadisticas>
      </div>
    </>
  );
}

export default Pokebola;

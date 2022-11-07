import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

import logo from './logo.svg';

function App() {

  // variaveis iniciais 
  const [id, setId] = useState("1");
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
  const [nome, setNome] = useState("buba");
  const [Hp, setHp] = useState("45");
  const [Atk, setAtk] = useState("80");
  const [Def, setDef] = useState("80");
  const [Vel, setVel] = useState("80");
  const [Tp, setTp] = useState("grass");
  
  // pesquisa
  const pesquisar = e => {
    e.preventDefault();
    const pesquisar = e.target[0].value;

    fetch('https://pokeapi.co/api/v2/pokemon/'+pesquisar)
    .then(response => response.json())
    .then(data => {
      setId(data.id)
      setNome(data.name)
      setImg(data.sprites.other.dream_world.front_default)
      setHp(data.stats[0].base_stat)
      setAtk(data.stats[1].base_stat)
      setDef(data.stats[2].base_stat)
      setVel(data.stats[5].base_stat)
      setTp(data.types[0].type.name)
    })
  
  }

  return (
  
    <div class="content">
        <div class="card">
        <form onSubmit={pesquisar}>
              <input type="text" className="form" placeholder="ID ou Nome" aria-label="ID ou Nome" aria-describedby="button-addon2" />
              <button className="btn btn-primary"  type="submit" id="button-addon2">Buscar</button> 
            </form>
            <div class="topCard">
                <h2 class="title">#{id}</h2>
                <h3 class="title">{nome}</h3>
                <span class="secondText"></span>
            </div>
            <div class="mediaCard">
                <img src={img} alt="logo"/>
            <div class="bottomCard">
                <h3 class="atributos">HP: {Hp}</h3>
                <h3 class="atributos">ATTACKS: {Atk}</h3>
                <h3 class="atributos">DEFENSE: {Def}</h3>
                <h3 class="atributos">SPEED: {Vel}</h3>
                <h3 class="atributos">TYPE: {Tp}</h3>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

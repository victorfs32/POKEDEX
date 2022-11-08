import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

import logo from './logo.svg';

function App() {

  // variaveis iniciais 
  const [id, setId] = useState("1");
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
  const [nome, setNome] = useState("bulbasaur");
  const [Hp, setHp] = useState("45");
  const [Atk, setAtk] = useState("49");
  const [Def, setDef] = useState("49");
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
  
            <div className="content">
              <div className="card">
                <form className='form' onSubmit={pesquisar}>
                    <input type="text" className="lo" placeholder="ID ou Nome" aria-label="ID ou Nome" aria-describedby="ID ou Nome" />
                      <button className="la" type="submit" id="submit">Buscar</button> 
                        </form>
                          <div className="topCard">
                          <h2 className="title">#{id}</h2>
                        <h3 className="title">{nome}</h3>
                    </div>
                  <div className="mediaCard">
                <img src={img} alt="logo"/>
                </div>
                <div className='progress-title'>
                  <h5>Hp</h5>
                    <div className='progress'>
                      <div className='progress-bar hp' style={{width: `${Hp}%`}}>
                          <div className='progress-value'>{Hp}</div>
                      </div>
                  </div>
                  </div>
                  <div className='progress-title'>
                    <h5>Attack</h5>
                      <div className='progress'>
                        <div className='progress-bar atk' style={{width: `${Atk}%`}}>
                          <div className='progress-value'>{Atk}</div>
                        </div>
                    </div>
                  </div>
                  <div className='progress-title'>
                  <h5>Defense</h5>
                    <div className='progress'>
                      <div className='progress-bar def' style={{width: `${Def}%`}}>
                        <div className='progress-value'>{Def}</div>
                      </div>
                    </div>
                  </div>
                  <div className='progress-title'>
                  <h5>Speed</h5>
                    <div className='progress'>
                      <div className='progress-bar vel' style={{width: `${Vel}%`}}>
                        <div className='progress-value'>{Vel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  );
}

export default App;

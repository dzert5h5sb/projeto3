import './Fortnite.css'
import React, { useContext } from "react"

import { AppContexto } from '../../data/Store'

const Fortnite = props => {

    const {contextoNome, setContextoNome} = useContext(AppContexto)
    const {contextoSenha, setContextoSenha} = useContext(AppContexto)

    return (
        <div>
            <div className="titulo">
                <h1>Fortnite</h1>
                <h2>História do jogo</h2>
      </div>

      <br/>

      <center>

          <h4> Fortnite foi revelado pela primeira vez pela Epic Games em 2011, 
              considerado uma combinação de Minecraft e Left 4 Dead, pois quatro jogadores trabalhariam juntos para buscar
               recursos para construir fortificações, 
              armadilhas, armas e outros objetos para sobreviver a ataques de monstros.</h4>
              <h4>Durante a última parte do desenvolvimento de Fortnite, o PlayerUnknown’s Battlegrounds foi lançado em março de 2017 para PCs em acesso antecipado, e rapidamente se tornou um jogo popular e bem sucedido,
                   tornando-se o exemplo definitivo do gênero Battle Royale. De acordo com Mustard, 
                   a equipe da Epic "amava jogos Battle Royale como [Battlegrounds]" e explorou como eles poderiam fazer um modo similar 
                   dentro do motor gráfico de Fortnite. Eles mantiveram este modo em uma equipe de desenvolvimento separada do jogador 
                   principal contra os modos de ambiente para experimentação e para não jogar fora o equilíbrio no jogo principal.</h4>
      </center>
    </div>     
    )
}
export default Fortnite
import './Historia.css'
import React, { useContext } from "react"

import { AppContexto } from '../../data/Store'

const Historia = props => {

    const {contextoNome, setContextoNome} = useContext(AppContexto)
    const {contextoSenha, setContextoSenha} = useContext(AppContexto)

    return (
        <div>
            <div className="titulo">
                <h1>COD</h1>
                <h2>História do Jogo</h2>
        </div>
            <center> 
                <h4>Apesar de ter começado também em 1942, a maior parte do primeiro jogo se apresenta em 1944 e 1945, 
                    quando as potências aliadas se opõem às forças nazistas. No clássico estilo COD,
                    a campanha permite que se observe três perspectivas diferentes sobre a guerra, 
                    com diversos protagonistas. </h4> 
                    <br></br>
                    <h4> Os jogos da série Call of Duty são publicados e propriedade da Activision. Enquanto que o estúdio Infinity Ward ainda é o principal produtor, a Treyarch também já produziu alguns títulos onde a história está interligada entre eles. Alguns jogos já foram produzidos pela Gray Matter Interactive, Nokia, Exakt Entertainment, Spark Unlimited, Amaze Entertainment, n-Space, Aspyr, Rebellion Developments, Ideaworks Game Studio, 
                        Sledgehammer Games e nStigate Games. Os jogos usam vários motores incluindo id Tech 3, o Treyarch NGL e o IW 5.0.</h4>

            </center>
        </div>
    )
}
export default Historia
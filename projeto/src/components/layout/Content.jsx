import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import UseState from '../../views/contents/UseState'
import Fortnite from '../../views/contents/Fortnite'
import Historia from '../../views/contents/Historia'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/UseState">
                <UseState />
            </Route>
            <Route path="/Fortnite">
                <Fortnite />
            </Route>
            <Route path="/Historia">
                <Historia />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content
import './App.css';
import CSMap from './components/CSMap/CSMap'
import React from "react";
import { Container } from 'reactstrap';

export default class App extends React.Component {

  render() {
    const maps = require('./resources/map-data.json')

    return (
      <Container>
        {maps.data.map((csmap, key) => <CSMap key={key} {...csmap} />)}
      </Container>
    )
  }
}
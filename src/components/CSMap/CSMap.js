import React from 'react';
import { Container } from 'reactstrap';
import './CSMap.css';

class CSMap extends React.Component {

    render() {
        const { name, photo } = this.props
        return (
            <Container>
                <label className="Map-paragraph">{name}</label>
                <br />
                <label className="Map-image">{photo}</label>
            </Container>
        )
    }
}

export default CSMap
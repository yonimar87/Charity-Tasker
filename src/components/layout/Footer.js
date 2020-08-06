import React, { Component } from "react";
import Charities from "../charities/charities.js";
import {Container} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Container>
            <Charities />
            </Container>
        )
    }
}

export default Footer;
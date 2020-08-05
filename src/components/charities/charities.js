import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap"

class Charities extends Component {

    constructor() {
    super()

    this.state = {
        charityDesc1: "Yawl mizzen galleon heave down swing the lead grog blossom lee snow Buccaneer black jack. No prey, no pay ho barque reef sails red ensign hands dead men tell no tales mizzen me schooner. Pieces of Eight Davy Jones' Locker warp handsomely yard hulk crimp lateen sail provost spyglass.",
        charityDesc2: "Dead men tell no tales chantey gangway skysail Corsair bilge rat spirits grog gun jack. Wench gally fire in the hole spyglass ballast fire ship me gunwalls boom salmagundi. Blimey reef walk the plank Cat o'nine tails no prey, no pay Jolly Roger run a shot across the bow piracy wench handsomely.",
        charityDesc3: "Cheesecake halloumi cow. Cheeseburger st. agur blue cheese port-salut camembert de normandie mascarpone cheese and biscuits camembert de normandie stilton. Airedale queso danish fontina cheese triangles danish fontina halloumi cauliflower cheese bocconcini. Ricotta port-salut paneer fondue say cheese manchego.",
        charityDesc4: "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. ",
        maxLength: 80
        };
    }

    render () {
        return (
            <div>
                <h1>Below are the 4 charities we work with</h1>
                <div id="charities">
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://www.fillmurray.com/200/200" />
                <Card.Body>
                    <Card.Title className="cardTitle">Pirate this.state.charity</Card.Title>
                    <Card.Text>
                        { ((this.state.charityDesc1).length > this.state.maxLength) ? 
                        (((this.state.charityDesc1).substring(0,this.state.maxLength-3)) + '...') : 
                        this.state.charityDesc1 }
                    </Card.Text>
                    <Button variant="primary">Piiiirates</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://www.fillmurray.com/200/201" />
                <Card.Body>
                    <Card.Title className="cardTitle">More Pirate this.state.charity</Card.Title>
                    <Card.Text>
                    { ((this.state.charityDesc2).length > this.state.maxLength) ? 
                        (((this.state.charityDesc2).substring(0,this.state.maxLength-3)) + '...') : 
                        this.state.charityDesc2 }
                    </Card.Text>
                    <Button variant="primary">We love pirates</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://www.fillmurray.com/210/200" />
                <Card.Body>
                    <Card.Title className="cardTitle">Cheese this.state.charity</Card.Title>
                    <Card.Text>
                    { ((this.state.charityDesc3).length > this.state.maxLength) ? 
                        (((this.state.charityDesc3).substring(0,this.state.maxLength-3)) + '...') : 
                        this.state.charityDesc3 }
                    </Card.Text>
                    <Button variant="primary">Where is my cheese?</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://www.fillmurray.com/205/200" />
                <Card.Body>
                    <Card.Title className="cardTitle">Zombie this.state.charity</Card.Title>
                    <Card.Text >
                    { ((this.state.charityDesc4).length > this.state.maxLength) ? 
                        (((this.state.charityDesc4).substring(0,this.state.maxLength-3)) + '...') : 
                        this.state.charityDesc4 }
                    </Card.Text>
                    <Button variant="primary">Click for Brains</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
        )         
    } 
 }

export default Charities
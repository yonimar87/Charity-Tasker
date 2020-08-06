import React, { Component } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

class Charities extends Component {
  constructor() {
    super();

    this.state = {
      charityDesc1:
        "The RSPCA is an independent, community-based charity providing animal care and protection services across the country.",
      charityDesc2:
        "The aim of founding StreetSmart was to simultaneously break down inaccurate prejudices about homelessness, raise vital funds for important smaller, local organisations and strengthen them through collaboration and connecting them to their community.",
      charityDesc3:
        "The very first Ronald McDonald House in Australia opened in Camperdown, near the Children’s Hospital in 1981. In 1995, RMHC Charities Greater Western Sydney (GWS) relocated the House to Westmead, to continue providing vital services to families after the hospital had relocated to Western Sydney. Today, our Westmead House provides a safe place to stay for around 1,360 families per year..",
      charityDesc4:
        "Starlight's mission is To brighten the lives of seriously ill children and their families .Because sick kids are still kids at heart... ",
      maxLength: 80,
    };
  }

  render() {
    return (
      <div>
        <h1>Below are the 4 charities we work with</h1>
        <Container>
          <Row>
            <Col>
              <Card
                style={{
                  width: "15rem",
                  backgroundColor: "#223623",
                  color: "#B6CA91",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://www.rspca.org.au/sites/all/themes/rspca/logo.png"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    For the Animal Lovers
                  </Card.Title>
                  <Card.Text>
                    {this.state.charityDesc1.length > this.state.maxLength
                      ? this.state.charityDesc1.substring(
                          0,
                          this.state.maxLength - 3
                        ) + "..."
                      : this.state.charityDesc1}
                  </Card.Text>
                  <a href="https://www.rspca.org.au/about-us">
                    <Button variant="primary">RSPCA Website</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  width: "15rem",
                  backgroundColor: "#223623",
                  color: "#B6CA91",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://streetsmartaustralia.org/wp-content/uploads/2014/10/StreetSmart-Logo-landscape-black-80h.png"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Help those in need
                  </Card.Title>
                  <Card.Text>
                    {this.state.charityDesc2.length > this.state.maxLength
                      ? this.state.charityDesc2.substring(
                          0,
                          this.state.maxLength - 3
                        ) + "..."
                      : this.state.charityDesc2}
                  </Card.Text>
                  <a href="https://streetsmartaustralia.org/">
                    <Button variant="primary">StreetSmart</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  width: "15rem",
                  backgroundColor: "#223623",
                  color: "#B6CA91",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://www.rmhc.org.au/sites/default/files/2019-05/RMHC_GWSyd_main_whitetext.png"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    To you hungry kids
                  </Card.Title>
                  <Card.Text>
                    {this.state.charityDesc3.length > this.state.maxLength
                      ? this.state.charityDesc3.substring(
                          0,
                          this.state.maxLength - 3
                        ) + "..."
                      : this.state.charityDesc3}
                  </Card.Text>
                  <a href="https://www.rmhc.org.au/our-chapters/rmhc-greater-western-sydney">
                    <Button variant="primary">Ronald McDonald</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  width: "15rem",
                  backgroundColor: "#223623",
                  color: "#B6CA91",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://starlight.org.au/themes/stl/images/logo.png"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Starlight - Children in Need
                  </Card.Title>
                  <Card.Text>
                    {this.state.charityDesc4.length > this.state.maxLength
                      ? this.state.charityDesc4.substring(
                          0,
                          this.state.maxLength - 3
                        ) + "..."
                      : this.state.charityDesc4}
                  </Card.Text>
                  <a href="https://www.rspca.org.au/about-us">
                    <Button variant="primary">Startlight</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Charities;

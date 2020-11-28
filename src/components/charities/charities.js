import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

function Charities () {

  const img1 = new Image();
  img1.src = "https://www.rspca.org.au/sites/all/themes/rspca/logo.png";
  const img2 = new Image();
  img2.src = "http://yourimage.jpg";
  const img3 = new Image();
  img3.src = "http://yourimage.jpg";
  const img4 = new Image();
  img4.src = "http://yourimage.jpg";

  const charityList = [
    {
      "title": '',
      "charityDesc1": "THIS IS A TEST The RSPCA is an independent, community-based charity providing animal care and protection services across the country.",
      "image": "1",
      "maxLength": 80
    },
    {
      "title": '',
      "charityDesc2": "The aim of founding StreetSmart was to simultaneously break down inaccurate prejudices about homelessness, raise vital funds for important smaller, local organisations and strengthen them through collaboration and connecting them to their community.",
      "image": "1",
      "maxLength": 80
    },
    {
      "title": '',
      "charityDesc3": "The very first Ronald McDonald House in Australia opened in Camperdown, near the Children’s Hospital in 1981. In 1995, RMHC Charities Greater Western Sydney (GWS) relocated the House to Westmead, to continue providing vital services to families after the hospital had relocated to Western Sydney. Today, our Westmead House provides a safe place to stay for around 1,360 families per year..",
      "image": "1",
      "maxLength": 80
    },
    {
      "title": '',
      "charityDesc4": "Starlight's mission is To brighten the lives of seriously ill children and their families .Because sick kids are still kids at heart... ",
      "image": "1",
      "maxLength": 80
    }, 
  ];

  return (
    <div>
        <h1>CHARITIES WE WORK WITH</h1>
          <Row>
            <Col>
              <Card
                style={{
                  width: "15rem",
                  color: "#B6CA91",
                }}
              >
                <Card.Img
                  variant="top"
                  src = "https://www.rspca.org.au/sites/all/themes/rspca/logo.png"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    For the Animal Lovers
                  </Card.Title>
                  <Card.Text>
                    {charityList[0].charityDesc1.length > charityList[0].maxLength
                      ? charityList[0].charityDesc1.substring(
                          0,
                          charityList[0].maxLength - 3
                        ) + "..."
                      : charityList[0].charityDesc1}
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
                    {charityList[1].charityDesc2.length > charityList[1].maxLength
                      ? charityList[1].charityDesc2.substring(
                          0,
                          charityList[1].maxLength - 3
                        ) + "..."
                      : charityList[1].charityDesc2}
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
                    {charityList[2].charityDesc3.length > charityList[2].maxLength
                      ? charityList[2].charityDesc3.substring(
                          0,
                          charityList[2].maxLength - 3
                        ) + "..."
                      : charityList[2].charityDesc3}
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
                  color: "#B6CA91",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://www.starlight.org.au/static/86d644c7e8bd87bf2be35ae1fcf39cfc/bc8e0/starlight-logo.png"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Starlight - Children in Need
                  </Card.Title>
                  <Card.Text>
                    {charityList[3].charityDesc4.length > charityList[3].maxLength
                      ? charityList[3].charityDesc4.substring(
                          0,
                          charityList[3].maxLength - 3
                        ) + "..."
                      : charityList[3].charityDesc4}
                  </Card.Text>
                  <a href="https://www.rspca.org.au/about-us">
                    <Button variant="primary">Startlight</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </div>
  );
}

// import React, { Component } from "react";
// import { Card, Button, Container, Col, Row } from "react-bootstrap";

// class Charities extends Component {
//   constructor() {
//     super();

//     this.state = {
//       charityDesc1:
//         "The RSPCA is an independent, community-based charity providing animal care and protection services across the country.",
//       charityDesc2:
//         "The aim of founding StreetSmart was to simultaneously break down inaccurate prejudices about homelessness, raise vital funds for important smaller, local organisations and strengthen them through collaboration and connecting them to their community.",
//       charityDesc3:
//         "The very first Ronald McDonald House in Australia opened in Camperdown, near the Children’s Hospital in 1981. In 1995, RMHC Charities Greater Western Sydney (GWS) relocated the House to Westmead, to continue providing vital services to families after the hospital had relocated to Western Sydney. Today, our Westmead House provides a safe place to stay for around 1,360 families per year..",
//       charityDesc4:
//         "Starlight's mission is To brighten the lives of seriously ill children and their families .Because sick kids are still kids at heart... ",
//       maxLength: 80,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Below are the 4 charities we work with</h1>
//         <Container>
//           <Row>
//             <Col>
//               <Card
//                 style={{
//                   width: "15rem",
//                   backgroundColor: "#223623",
//                   color: "#B6CA91",
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src="https://www.rspca.org.au/sites/all/themes/rspca/logo.png"
//                 />
//                 <Card.Body>
//                   <Card.Title className="cardTitle">
//                     For the Animal Lovers
//                   </Card.Title>
//                   <Card.Text>
//                     {this.state.charityDesc1.length > this.state.maxLength
//                       ? this.state.charityDesc1.substring(
//                           0,
//                           this.state.maxLength - 3
//                         ) + "..."
//                       : this.state.charityDesc1}
//                   </Card.Text>
//                   <a href="https://www.rspca.org.au/about-us">
//                     <Button variant="primary">RSPCA Website</Button>
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card
//                 style={{
//                   width: "15rem",
//                   backgroundColor: "#223623",
//                   color: "#B6CA91",
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src="https://streetsmartaustralia.org/wp-content/uploads/2014/10/StreetSmart-Logo-landscape-black-80h.png"
//                 />
//                 <Card.Body>
//                   <Card.Title className="cardTitle">
//                     Help those in need
//                   </Card.Title>
//                   <Card.Text>
//                     {this.state.charityDesc2.length > this.state.maxLength
//                       ? this.state.charityDesc2.substring(
//                           0,
//                           this.state.maxLength - 3
//                         ) + "..."
//                       : this.state.charityDesc2}
//                   </Card.Text>
//                   <a href="https://streetsmartaustralia.org/">
//                     <Button variant="primary">StreetSmart</Button>
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card
//                 style={{
//                   width: "15rem",
//                   backgroundColor: "#223623",
//                   color: "#B6CA91",
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src="https://www.rmhc.org.au/sites/default/files/2019-05/RMHC_GWSyd_main_whitetext.png"
//                 />
//                 <Card.Body>
//                   <Card.Title className="cardTitle">
//                     To you hungry kids
//                   </Card.Title>
//                   <Card.Text>
//                     {this.state.charityDesc3.length > this.state.maxLength
//                       ? this.state.charityDesc3.substring(
//                           0,
//                           this.state.maxLength - 3
//                         ) + "..."
//                       : this.state.charityDesc3}
//                   </Card.Text>
//                   <a href="https://www.rmhc.org.au/our-chapters/rmhc-greater-western-sydney">
//                     <Button variant="primary">Ronald McDonald</Button>
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card
//                 style={{
//                   width: "15rem",
//                   backgroundColor: "#223623",
//                   color: "#B6CA91",
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src="https://starlight.org.au/themes/stl/images/logo.png"
//                 />
//                 <Card.Body>
//                   <Card.Title className="cardTitle">
//                     Starlight - Children in Need
//                   </Card.Title>
//                   <Card.Text>
//                     {this.state.charityDesc4.length > this.state.maxLength
//                       ? this.state.charityDesc4.substring(
//                           0,
//                           this.state.maxLength - 3
//                         ) + "..."
//                       : this.state.charityDesc4}
//                   </Card.Text>
//                   <a href="https://www.rspca.org.au/about-us">
//                     <Button variant="primary">Startlight</Button>
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

export default Charities;

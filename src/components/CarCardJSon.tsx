
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import './CarCard2.css';
import Container from 'react-bootstrap/Container';
import { Search } from 'react-bootstrap-icons';
import JSONDATA from "../components/CarData.json";



export default function CarCardJSon() {

    const [searchOn, setSearchOn] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [redirect, setRedirect] = useState(false);

    type JSONDATA = {
        image: URL;
        car_manufacturer: string;
    }

    return (
        <div >
            <Card style={{ width: '25rem', marginTop: "5%", marginLeft: "70%", height: "480px", boxShadow: '1px 2px 9px #4a4647' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title style={{ fontWeight: 700, fontSize: "1rem", alignContent: "left", alignItems: "left", margin: 10, textAlign: "left" }}>Select Manufacturer</Card.Title>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search Brands"
                            className="me-2"
                            aria-label="Search" autoFocus={true} id="searchInput"
                            onChange={(event) => {
                                setSearchTerm(event.target.value);
                            }}

                        />
                        <Search className="searchIcon" size={12} />

                    </Form>
                </Card.Body>
                <Card.Body >
                    <Container fluid className="cont-manufacturer" >
                        <Row className="img-row">
                            {!searchOn && JSONDATA.filter((product,id) => {
                                if (searchTerm === "") {
                                    return product;
                                } else if (
                                    product.car_manufacturer
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                ) {
                                    return product;
                                }
                            })
                                .map((product, id) => {
                                    return (


                                        <Col key={product.id} ><img className="img" src={`${product.image}`} />
                                            <h6>{product.car_manufacturer}</h6></Col>

                                    )
                                })
                            }

                        </Row>

                    </Container>
                    {/* <Container fluid className="cont-manufacturer" >
                      <Row className="img-row">
                          <Col ><img className="img" src={require("../assets/images/brand1.jpeg")} /></Col>
                          <Col><img className="img" src={require("../assets/images/brand9.jpeg")} /></Col>
                          <Col><img className="img" src={require("../assets/images/brand2.jpeg")} /></Col>
                      </Row>
                      <Row className="img-row">
                          <Col ><img className="img" src={require("../assets/images/brand3.jpeg")} /></Col>
                          <Col><img className="img" src={require("../assets/images/brand4.jpeg")} /></Col>
                          <Col><img className="img" src={require("../assets/images/brand5.jpeg")} /></Col>
                      </Row>
                      <Row className="img-row" >
                          <Col ><img className="img" src={require("../assets/images/brand6.jpeg")} /></Col>
                          <Col><img className="img" src={require("../assets/images/brand7.jpeg")} /></Col>
                          <Col><img className="img" src={require("../assets/images/brand8.jpeg")} /></Col>
                      </Row>
                  </Container>  */}


                </Card.Body>

            </Card></div>)
}



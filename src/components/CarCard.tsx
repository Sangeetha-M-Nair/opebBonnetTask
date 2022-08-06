import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { useRef } from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarCard2 from './CarCard2';
import {  useNavigate } from "react-router-dom";


function CarCard() {

    const [carSearch, setCarSearch] = useState(false);
    let navigate = useNavigate();


    async function handleChange() {
        navigate('/car');
   

   }

    return (
        <div >
            <Card style={{ width: '25rem',marginTop:"5%", marginLeft: "70%", height:"480px", boxShadow: '1px 2px 9px #4a4647' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                <Card.Body>
                    <Card.Title style={{ margin: 10 }}>
                    <h2 style={{ textAlign: "left", fontWeight: 700, fontSize: "2rem", alignContent: "left" }}>Experience The Best Car Services In Ahmedabad</h2></Card.Title>
                    <Card.Text style={{marginTop:"30px"}}>
                        <h6 style={{textAlign:"left",fontWeight:500,fontStretch:"normal"}}>Get instant quotes for your car service</h6> 
                    </Card.Text>
                </Card.Body>
                <Dropdown >

                    <Dropdown.Toggle variant="" id="dropdown-basic"  onClick={handleChange} style={{
                        border: " 0.0625rem solid #9b9b9b",
                        padding: 10, margin: 10, width: "95%", justifyContent: 'space-between', alignItems: 'center'
                    }}
                    >

                        SELECT YOUR CAR
                    </Dropdown.Toggle>
                </Dropdown>


                <Button type="submit"
variant="danger" style={{ padding: 10, margin: 10 }} >CHECK PRICES FOR FREE</Button>

                <Card.Body>
                    <footer className="text-muted" style={{ fontSize: '12px' }}>
                        By contuining you agree to GoMechanic <u>Terms & Conditions</u> and  <u>Privacy Policy</u>
                    </footer>

                    <Row >
                        <Col style={{ borderRight: '2px solid grey' }}>
                            <img loading="lazy" src="https://gomechanic.in/assets/img/customerpage/formIcons/star_rating.png" alt="Rating" style={{
                                height: "1.6rem"
                            }} />
                            <span style={{
                                color: '#008000', fontSize: '1.6rem'
                            }}>4.7/</span>
                            <span style={{ color: '#008000' }} >5</span>

                            <div className="text-muted " style={{ fontSize: 12 }} >Based on 65000+</div>
                        </Col>
                        <Col>
                            <h4>2,50,000</h4>
                            <div className="text-muted " style={{ fontSize: 12 }} >Happy customers</div>
                        </Col>
                    </Row>


                </Card.Body>
            </Card></div>
    )
}

export default CarCard
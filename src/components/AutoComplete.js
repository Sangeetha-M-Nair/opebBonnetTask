import React from 'react';

import './Style.css';
//import React, { Component } from "react";


const location = ["Chevrolet", "Maruti Suzuki", "Daewoo", "Datsun", "fiat", "ford", "honda", "hyundai", "Mahindra"];

export default class AutoCompletedText extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }


    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = location.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className='div' >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }

    render() {
        // const { emailErr } = this.state.formErrors;
        const { text, suggestions } = this.state;
        return (
            <div>


                <div id="note">

                    <input id="query" type="text" placeholder='Enter your location' style={{ fontSize: "17px" }} onChange={this.onTextChange} value={text} />
                    {this.renderSuggestions()}



                </div>

            </div>
        )
    }


}
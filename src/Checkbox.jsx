import React, { Component } from 'react';
import "./checkbox.scss";
export default class Checkbox extends Component {
    render() {
        return (
            <label class="checkbox-label">
            <input type="checkbox"/>
            <span class="checkbox-custom rectangular"></span>
            </label>
        );
    }
}
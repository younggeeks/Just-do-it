import React, { Component } from 'react';
import "./checkbox.scss";
export default class Checkbox extends Component {
    render() {
        const {onChanged} = this.props;
        return (
            <label className="checkbox-label">
            <input type="checkbox"  onChange={(e)=>onChanged(e.target.checked)} />
            <span className="checkbox-custom rectangular"></span>
            </label>
        );
    }
}

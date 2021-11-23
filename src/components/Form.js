import React, { Component } from 'react'

class Form extends React.Component {
    // const clickHandler = () => {
    //     alert('Click');
    // }
    
    render() {
        return (
            <form onSubmit={this.props.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="stocktickername">Input Stock Ticker </label>
                    <input className="form-control" id="stocktickername" name="stocktickername"/>
                </div>
                <div className="form-group">
                    <label htmlFor="timewindow">Input Desired Prediction Window </label>
                    <select className="form-control" id="timewindow" name="timewindow">
                        <option id="0">1 Day</option>
                        <option id="1">3 Days</option>
                        <option id="2">1 Week</option>
                        <option id="3">4 Weeks</option>
                        <option id="4">3 Months</option>
                        <option id="5">1 Year</option>
                    </select>
                </div>
                <button className="btn">Submit</button>
            </form>
        )
    }
}

export default Form

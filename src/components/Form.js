import React from 'react'

const Form = () => {

    const clickHandler = () => {
        alert('Click');
    }

    return (
        <div style={{marginTop:"20px"}}>
            <form>
                <div className="form-group">
                    <label htmlFor="stocktickername">Input Stock Ticker </label>
                    <input className="form-control" id="stocktickername" />
                </div>
                <div className="form-group">
                    <label htmlFor="timewindow">Input Desired Prediction Window </label>
                    <select className="form-control" id="timewindow">
                        <option>1 Day</option>
                        <option>3 Days</option>
                        <option>1 Week</option>
                        <option>4 Weeks</option>
                        <option>3 Months</option>
                        <option>1 Year</option>
                    </select>
                </div>
                <button onClick={clickHandler} className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form

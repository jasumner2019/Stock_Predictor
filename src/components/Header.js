import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="row">
                <h1 style={{backgroundColor:'coral', color:'white', textAlign:'center'}}>Stock Predictor</h1>
                <h3 style={{marginTop:'20px', textAlign:'center'}}>Please type in a Stock Ticker below, and select the time window for your desired prediction.</h3>
            </div>
        </header>
    )
}

export default Header

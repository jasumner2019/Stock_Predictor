import React, { useState } from 'react'

const placeHolderImage = {
    imgsrc: "",
    alttxt: "Please select a Ticker and a Time Window"
}

const sampleGraph1 = {
    imgsrc: "../images/1DaySample.png",
    alttxt: "This is a Sample Graph"
}

const sampleGraph2 = {
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4w3wbCOc6Y08rUpFOo4XF2H_lIzMwMC-JA&usqp=CAU",
    alttxt: "This is a Sample Graph"
}

const Graph = () => {
    return (
        <div className="container">
            <h1>Graph Prediction</h1>
            <Image 
                imgsrc={sampleGraph1.imgsrc} 
                alttxt={sampleGraph1.alttxt}>
            </Image>
        </div>
    )
};

const Image = ({imgsrc, alttxt}) => {
    return(
        <img className="graphimage" src={imgsrc} 
        alt={alttxt} 
        />
    )
};

export default Graph

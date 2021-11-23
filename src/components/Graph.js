import React, { Component, useState } from 'react'
import graph1 from '../images/1DaySample.jpeg'
import graph2 from '../images/3DaySample.jpeg'
import graph3 from '../images/1WkSample.jpeg'
import graph4 from '../images/4WkSample.jpeg'
import graph5 from '../images/3MtSample.jpeg'
import graph6 from '../images/1YrSample.jpeg'
import Form from "./Form"
import SAMPLEGRAPH from "../shared/SAMPLEGRAPHS"

const Graph = (props) => {
    return (
        <div className="container">
            <h1>Graph Prediction</h1>
            <code>{props.timewindow}</code>
            <img src={renderGraph(props.timewindow)} alt="someText" className="graphimage" />
        </div>
    )
};

const renderGraph = (timewindow) => {
    switch(timewindow) {
        case "1 Day": 
            return graph1
            break
        case "3 Days":
            return graph2
            break
        case "1 Week":
            return graph3
            break
        case "4 Weeks":
            return graph4
            break
        case "3 Months":
            return graph5
            break
        case "1 Year":
            return graph6
            break
        default:
            
    }
}

// class RenderGraph extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             imgsrc: "",
//             imgalt: ""
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(event) {
//         this.setState({imgsrc: event.target.imgsrc});
//     }

//     render() {
//         return (
//             <div className="container">
//                 <h1>Graph Prediction</h1>
//                 <img src={graph1} alt="someText" className="graphimage" />
//             </div>
//         )
//     }
// }

export default Graph

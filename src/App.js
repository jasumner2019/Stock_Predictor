import Header from "./components/Header"
import Form from "./components/Form"
import Disclaimer from "./components/Disclaimer"
import Ad from "./components/Ad"
import Graph from "./components/Graph"
import React from "react"

function App() {
  return (
    <div>
      <div>
        <div>
          <Ad />
        </div>
        <div className="container">
          <Header/>
          <Form />
          <Disclaimer />
        </div>
        <div>
          <Ad />
        </div>
        <div>
          <Graph />
        </div>
      </div>  
    </div>    
  );
}

export default App;


//Things I need help with:
//Having Ads appear on the right and left of the screen, and making them disappear when viewed on smaller screens
//Making the correct Graph appear when the "Submit" button has been pressed. Also, should refresh the ads.
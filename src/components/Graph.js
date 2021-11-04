import React, { Component, useState } from 'react'
import graph1 from '../images/1DaySample.jpeg'
import graph2 from '../images/3DaySample.jpeg'
import graph3 from '../images/1WkSample.jpeg'
import graph4 from '../images/4WkSample.jpeg'
import graph5 from '../images/3MtSample.jpeg'
import graph6 from '../images/1YrSample.jpeg'
import Form from "./Form"

const placeHolderImage = {
    imgsrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUMAAACcCAMAAADS8jl7AAABWVBMVEX////u7u74+Pj///3///n8//////v5///7/P7///f///rr7/j0/////+/p7fItZcBAcMTe5fQ0acHu8vm4x+auwOPD0OoiYb+es96IotfO2O6QqNlYgcq9xtK+wMHSyMHI097u+v9pi87/+PHW3/EXXL3CwsHOzs3m5uavsbLp9P+6uLvV3ufv4dDx5dz+5s+ao7JOesd1lNF6mNO9t7Pc3+WbsN3q1sGttLypraDPxcS2wMyenp7p49ydlpHl2tSZm6/Ls5+hr7iPipvP6Pf97d2NdWjNtppzgJLAo5DY8/+sw9xlcIOqkHaDorqalpeljYp6d32crcW5pY7979WAkK7dx62AjqCun5CljYmYmqCOh4nPvKq+2OuskoS7rqJ1h6ZUUV6LorLby7umqLPKzcLDztBcbX2jr6u+sZ96aWzp/O/CxNavs82gjpfE1dHp1tO0padmZGtfk+iiAAAPH0lEQVR4nO2d/1/aSBrHh0QQRISEb4KQBMKXQICKBGVBTHXl+sXteuv2rKVa7hZ1t3u97dr//4dLqGYeCigaIQHz2b4WBvLMTN55ZubJMBmRYLOkTwKyIUv6ZLMY6pbFUL8shvplMdQvkzFsrvRebP7+j0vVe+Yj2B+nPmNpGgxdO8y6c/BjeXHgI89zJ9rd26Fkqu/jhR8JtHWAdpV/++OUV0D15QfW9SGaBkO+jXbPijlugRUTrOhu5TjEZhr8P/YISUzw0hXXysWVo0Qx8eIlhV693jqQ861cbbEkcQoQScof/1RArXX05md06GQlis9IHBtHao4XkmKJWIkrFRC7zObyJSaOui+5+qKUibM11Mt50pqKH37Itpd+RP9c/mX52ZFK9GPiw/Kv+VfL/OLWwe7rF/s7dsW/dvKto7dHCL3a29nfLXywbx2cUARCuyn+uedfCDk+eM7/cp0fH6APzXfkL8snth/R++UP9pM82jpC723PXc+LB571rZ8Rav2mlPVh8c2+kvPiWJ6rT1Nh2CbsnpcZkWgjBYH6LnGITqlXiVa7c7C7t730gRHzrradX+8xfO15d/rlHWr9vPDpuR2dJNCOyhDtimcvamcv9tFH4TeyjTpNNcdz1Mmj45Bi1OmeHa9nOKXJf2N4iH5NHHNqzhM/v+m0ZTsidwpZXgHTFqonhazjUPG8F2fHR6cHpzUpv8tlE2g3fnr2VvGiV/Huwe7+K66TYoW/FlG3wR54/q3k8uw/CeVf8Ug+av3maNs7eSUfxacVP2ytN9v2rZ+WldeCytDzzqb4ocrwrJfzpDUNhqRaxJLgV195wekQVpRCCeUVCSvOj2r7FtThWPmfQxmPCUFQviSVlHKs+rGAHCvfclEzsAl20nZtr+ZIOHuZ9o5RXgml+SN+xWZXjrHzvWwmLsNjm5bYMLYC+mU4wzmQxVC/LIb6ZTHUr0GGJCKVsU0Z35T/7KQhlZoxDTB0neyz0hkpccU/ah2Omea9+6xq0A+L1NbLPGJrbEJixYx/qJUlqEGGXS5XihPE6eWXGn9xzhlRqRnTAMOFbJXPLq3IBTLrtyF5yJyVpe9kjcv6ZTHUL4uhflkM9ctiqF8WQ/2yGOqXxVC/LIb6ZTHUL4uhfg0yZP0l0Y/kxpJEsVRzcD3HE5QzcOv01QDDJZZiL1KuxlYtkZNEboI1mx0lveXbvh42f8iKBVf82XpC5DPbhQlWbUYUSobp+zF0dRqsWK129po/hGTi6qkz9Adp3yZ1z7ZsCYhaC5cDd06hWgxHKeSOJsMbqTGOtBiO0KbX69t0j3WoxXCYqNWYl6bHI/hUGfpjEedNN0cFvvuS2vTRyYA/QH1vNUpPkiGVpGmvr1yOJZOViM8bCYaiFOX2O1EwmFrzeTduH4YH9PQYulfL6Q1fkkqFQoFgcFVxuljM502HvbSvrKCthO79k/oTY+gPxtLJYF+0QoV6L043lQrQ3nH7QKgnxHB1M7QRLq/eRsn9EIRPiGFAGWnXxh4n7qMnwtAfLNM+eiIEnwjDaMXrC/r9k1p/NWT+MM9KBcQ2FuZi/tCJ/Ks+OjLOLduDNcDQwaaQTJHSSjef68z8/GHEt5GOBSe8AHDY/CES7Yg4rc3+/KFz1UuXJ9QJAg2bP2yFXAX2fObnD6lIOhZJTh7h/I4poWR6IzqdouaToT/oo9ceFC8/RHPIMEhXwuXgFBfwziFDr8870VBmQHPHMOqLlb+fEZyw5oyhcy28OvVC54thqjyFcHBA88TQuZaevhOiuWIY9RnhhGh+GFIhI3rCb5oThhQ9jRvjEZoHhv5A0uv1Bg0rHzJkL6vqxlL73ZMz1Gk3f2h84uqmnz90B2Ph8ip1/cuSIQIMF8RtdWOnYgGxCV5dOyex4qWZn3lMRVKrsXQsaFgjvhb0Q4e6NwwqpjwNxNe6tRVzP3vrD/lobyw4tZmF0cIMeYkRC0pbrnO831UocSSbFxBrzmfA/aG1crocM2wk7hdsyyl0aWRVxpK7EoquxcJ0JUA5nUY34msBhlttxuyz1s5UmaZ9lYAJGjAQZkgSQnUKm2M9XO5AxUsnwxtG12NAoD9s2L7fQtQsSrlRaq0c9q1FnchtvkgBMNxmGM7IqoxUIEyH6Q0zjMDDBf3Q0IrcogpN339B2xQF+kPzNZJvqvhWp/QD3QMFY5tqlzOwJiPkj5VN24ivBRi6ri4ZI6syVG5f0qztQ5PJ522i3jWjq3C3MEOHUBfNFmMHTXI3d7uAHzq4BZPd622mDZzRGl+wLXd/zyu94vv9rXM/2YmXDJ8/3JjUwtVHFmS40lJDxCLVUdr09d59xs0fUpFYzOwD8rUAQ5Zpq/txb6WkUhyh04Zg6Pyhj6aNKvq+AjG2nDlPfJs/jC9U2YKh84fRGB2OGFP0/dUX2zQ5w+rRJyqZXvPPSENGpowP3RvhiJlvjwdkOobuSLoyG8OxJnMxjFKb3th0Fw8+gkzFcNPrjZl7imaozMQw4KN9pp9gGCLzMAyV6aDhP7c/SGZhmIp5V2fRB1WZgyG1oQSERlfiwTKeoRO5K+HK7ETUgzKcobsc807jgbAJapCh7HeJeVRqkJKbzZcmO/flDK35aANXDj6OBp95lKjdgp3/tnffJH9w9kc3y+lyJVCZmbmFURr27K0kc729+yRezE2mlTmjm0mvtxKkZnUo7tOQv0Fz0P2jWu30nr21HT7+LyzOlLoRVHI2Q8Ghmu6Y4qSCyTCdXE3Nhf/daIoMqeCGLx1bTc1uIDhC02HodAc2vN6Yum5rDjUFhu5ApJxW+M1yGH2rJszQH4qUvb6IqZdt6dYEGX5beF4Jza3/3WhCDP3RNSWAqQRMuGr18TUBhs6oGgBuzFEAeIcemaGfWlUDwDm5ARlTj8lQCaB7AeBT4qfqkRg63cGNMB3bnMFflPTrMRhSgYrif5vRuQ5gbtHgnMPVfreR6K2d+/wpeufaOX+o4vP61uY7ALxDw+a+uoyflOLdhCSJty3qjNKRNV+6HJn/APAODWGYQsUzhI4bKzXXrWvnkrTXbE/OGaMh89hxtrFQZbklKd+037Z2LuXbnGzdZkWG/yY1B7IY6pfFUL8shvplMdQvi6F+WQz1y2KoXxZD/bIY6pfFUL8shvo1bP7wtJG43rvv7vlDSyPnD/v37iMsjdAohur8Ye/vL2vzh0bX1LwazrA3f+gqyHHHXfOHlq5ljSn6NQbDkiitg6FFwO9ZZocDBwrD7fkEi1fTCi5x+eY9KfBiYrjJSjE+PLNPNdAyusCa3wYWjuxwa6XKgoSN5BWcIEfuqsKLzPBaoqLY299rDIY8I+5riY/tQw7XgcFAPH/uHWqnt5WS8O5hz6Icqx3GdBPauTri9UUt0SpIGKinetnSzqjuYhi7Zk9K+FQz9Zy222ArWspp9jyTi2uXuvtHTquMJ/7+v59x4gQnuok6q9m3xJ2GVqTo+YwvSVdqa+fv+R9qqfUfqy3bbNj3miL8BrgeKWuZo631/bqGrVXL4wQrOrC/lES8ayWf2c5gF5Nz+NqXcoAhgUCFq8ihMezbrowvIB4wrOELymYvokMTvMQ1tVqWmEYTly8m6lr57AWHE6/eSa/RmG2Z+UvLnSAW8IZWBLGkJUjCWdKAkDaiDiqU0exJlsEeqiQyezgzm6zZu8SMBDKzaZk56iLwcJJwxfF74u8ESMiYrlKZG6ALEih/qc7AzEhgbwOZyUzmXMPmsBGZm8w8n4tfODQWQ08K/a0B6TSyNe2bTyDhOcxK3E1i6yh7hf0wCuzZRYQbhryME552FmNbyiK+epM4hpnV7aRWCtq5vNAYtNazV6+1hJKZljiuZc81p6wjB7aHmb1V7BMwodk38yirMTxt4MzILCqq9uO1ZdxOCDsitARpt+EEoT56d/OFUz0Q24P3DrhfKgn6AkLJDqf4PD6oLzNoTyBQGYL328E3ZF9lQMawfJhwfmcPKgN7rP7Mer3PWAxlMBaSfXvTwfHv2RlI1EEVkAyGdZ4DX5Aj7d/ug0QdWPTZ83D0LuZB4hm0h124B2510OLIEfZFuHoSlN+XGdnqZTYOw1OuCsYUpoq/YUE8UKo2cSILooGSmMGDJN+WQRckZYA97gp6m9PWtKsg56rae89zuPGvzOBEq8bgWpZW8HUns9gFXCIDizy/wBehVYvj616CgQ670tXAk1kCX3el/1DLH4dha/tc64+WRNB8l+LAK1uihC9kV8SxAZJhn1zDIw9aOAQnRLK5mlaMLFzhSKcp1TCd021Oe++qgcp0E10AVMSBjnKlMR1XpoPdna+VsLt1l3FsgxxSrnFTpivOfsGo2Qz2gSWp93cwx2FY/4LDwIUrEMuSH9+1NQgLkg0vvuleApe3CZJm76o1Qfvr5jjtfTEHAu7Wn19xVZvAKTxiFdu7rgDQ4tdtjJoXwR7LbAabOISiFhIiTwOH8qXO17ZWS7S1h68n+vXrO+wdMod7xxZbGDc+LAmg+QlNnHDFZeyHxfoXfEKn8R183rwA+lMe9AueeBbby8U4vFHAMTaSEL4GqMpi1yEFcDvDCqADYbNZbN/J4scOHYIARy7cSSj2dWxfb36G9yYZ7d0Sk5XwlRLqqtuMc5+Sy4iaGVmXgB+VROj+oPkiIovjQ5HBsQUr5gApQcZA+EQGD/9991c88MMu7M+WRAkHzAuwP3VdwdGGyIL48BPeU7HDgOdiXX398QoO60kWFImK29gnT5nMmP0hXwfDSLMKnCqLwI2XdIn7Qz7T/8CpFty4akoDwpVjcL35HQZgs13ktMyajLSOx5dMFQ8WTaGqYS9RRa0HU1BlQXeaOdRiPUUOrcfx1NTbtWu18iCC4Q8zDL6tb17BkecC9wVKZdTyx2nLLmkdnxxoyyTTfa11e8otXIvTaifuwNgCqCTCSQPk0K4OWcrENSCewwuwA2exBtpVEf85Y9IGOrdi9VzWUCkBEB66lJtfyLC/MlqRrfVDMBtSAl1o9zlYydpNIDC3322rfjwGw9bvoC3314FbwAxYUYThqzzcZLT4iwYMiPC4+uxlBo+rb9YzBTRMDjbRdOKE2DcjJNuHWNwihSF2aiUEg7f44O96v9ljxo1tpiKlLY+YCDNASlvGTnmnTMNwhmUx1C+LoX5ZDPXLYqhfNiTYLOmT8H9x2NQt6xkhkAAAAABJRU5ErkJggg==",
    alttxt: "Please select a Ticker and a Time Window"
}

const Graph = () => {
    return (
        <div className="container">
            <h1>Graph Prediction</h1>
            <img src={graph1} alt="someText" className="graphimage" />
        </div>
    )
};

const renderGraph = (userInput) => {
    switch(userInput) {
        case "1 Day": 

            break
        case "3 Days":
            break
        case "1 Week":
            break
        case "4 Weeks":
            break
        case "3 Months":
            break
        case "1 Year":
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

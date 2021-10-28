import React from 'react'

const Ad1 = {
    id: 1,
    Company: "ABC"
}

const Ad2 = {
    id: 2,
    Company: "XYZ"
}

const Ad = ({id, Company}) => {
    return (
        <div className="adcontainerhorizontal">
            <h1 id={id} name={Company}>Ad Space</h1>
        </div>
    )
}

export default Ad

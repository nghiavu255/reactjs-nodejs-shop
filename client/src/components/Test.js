import React, { useState } from 'react'

const Test = () => {
    
    const {count , setCount} = useState(1)
    const handlepage = ()=>{
        setCount(3)
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={handlepage}>1</button>
        </div>
    )
}

export default Test

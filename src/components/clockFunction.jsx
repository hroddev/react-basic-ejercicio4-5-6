import React, { useEffect, useState } from 'react';

const ClockFunction = () => {
    
    const name = 'Hector'
    const lastName = 'Rodriguez'

    const [date, setDate] = useState(new Date())
    const [age, setAge] = useState(0)

    useEffect (() => {
        const timer = setInterval(() => setDate(new Date()),1000)        
        return () => {
            clearInterval(timer)
            tick()
        }
    })

    const tick = () => {
        setAge(age + 1)
    }
    
      
    return (
        <div>
            <h2>Hora Actual: {date.toLocaleTimeString() }</h2>
            <h3>{ name } { lastName }</h3>
            <h1>Edad: { age }</h1>
        </div>
    );
}

export default ClockFunction;

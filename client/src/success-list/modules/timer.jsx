// Article referenced during refactoring
// https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9
// Article referenced during refactoring
import React from 'react';
import { useEffect, useMemo, useState } from 'react';

// useMemo is to memorize
// useState is to notify react that the variable will be udpated
// useEffect takes effect after componentMount/Updated

const Timer = ({}) => {
    let date = new Date();
    // The following syntax sets the variable and the funciton
    const [ HHMMSS, setTime ] = useState( date.toLocaleTimeString() );
    const [ MMDDYYYY, setDate ] = useState( date.toLocaleDateString() );

    // set interval

    useEffect(()=> {
        console.log('itteration?');
        const interval = setInterval( 
            ()=>{
                let newDate = new Date();
                let newMMDDYYYY = newDate.toLocaleDateString();
                let newHHMMSS = newDate.toLocaleTimeString();
                setTime( newHHMMSS );
                setDate( newMMDDYYYY );
            },
            1000
        );
    }, []);

    // life cycle methods
    // componentDidMount() {
    //     document.title = `You clicked ${this.state.count} times`;
    // }
    // componentDidUpdate() {
    //     document.title = `You clicked ${this.state.count} times`;
    // }

    return (
        <div className="timer-root">
            <p className="day">{ MMDDYYYY }</p>
            <p className="timer">{ HHMMSS }</p>
        </div>
    )
    // render
    // the timer variable

}

export default Timer;
import { useEffect, useMemo, useState, React } from 'react';

// useMemo is to memorize
// useState is to notify react that the variable will be udpated

const Timer = ({}) => {
    let date = new Date();
    // The following syntax sets the variable and the funciton
    const [HHMMSS, setTime] = useState(date.toLocaleTimeString());
    const [MMDDYYYY, setDate] = useState(date.toLocaleDateString());
    let updateTimeDay = function () {
        let verb = 1;
        let newDate = new Date();
        let newMMDDYYYY = newDate.toLocaleDateString();
        let newHHMMSS = newDate.toLocaleTimeString();
        MMDDYYYY = newMMDDYYYY;
        HHMMSS = newHHMMSS;
        console.log('Verb =' + verb);
        verb++
        launchTimmer();
    }

    let launchTimmer = function () {
        setTimeout(()=> {
            updateTimeDay();
        }, 1000);
    }

    updateTimeDay();

    // function { 
    //   every 1000ms update the time variable
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
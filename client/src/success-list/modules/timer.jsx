import React from 'react';

const Timer = ({}) => {
    let date = new Date();
    let MMDDYYYY = date.toLocaleDateString();
    // save day
    let HHMMSS = date.toLocaleTimeString(); 
    // save time
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
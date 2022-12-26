import React, { useState, useEffect } from 'react'

const Timer = () => {

    const [time, setTime] = useState(new Date());

    const refreshTime = () => {setTime(new Date())};

    useEffect(() => {
    const timerId = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
  }
}, [])


  return (
    <p className='font-mono'>
    {time.toLocaleTimeString('en-CA', {hour12: false, timeZone: 'America/Toronto', timeZoneName: 'short'})}
    </p>
  );
}

export default Timer


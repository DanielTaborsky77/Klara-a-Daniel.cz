import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        } else {
          timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, [targetDate]);
    return (
        <div className='Timer'>
            <div className='Timer-Duo'>
              <div className='Timer-Item'>
                  <p className='Timer-Time'>{timeLeft.days}</p>
                  <p className='Timer-Unit'>{timeLeft.days === 1 ? 'Den' : timeLeft.days > 1 && timeLeft.days <= 4 ? 'Dny' : 'Dní'}</p>
              </div>
              <div className='Timer-Item'>
                  <p className='Timer-Time'>{timeLeft.hours}</p>
                  <p className='Timer-Unit'>{timeLeft.hours === 1 ? 'Hodina' : timeLeft.hours > 1 && timeLeft.hours <= 4 ? 'Hodiny' : 'Hodin'}</p>
              </div>
            </div>

            <div className='Timer-Duo'>
              <div className='Timer-Item'>
                  <p className='Timer-Time'>{timeLeft.minutes}</p>
                  <p className='Timer-Unit'>{timeLeft.minutes === 1 ? 'Minuta' : timeLeft.minutes > 1 && timeLeft.minutes <= 4 ? 'Minuty' : 'Minut'}</p>
              </div>
              <div className='Timer-Item'>
                  <p className='Timer-Time'>{timeLeft.seconds}</p>
                  <p className='Timer-Unit'>{timeLeft.seconds === 1 ? 'Vteřina' : timeLeft.seconds > 1 && timeLeft.seconds <= 4 ? 'Vteřiny' : 'Vteřin'}</p>
              </div>
            </div>
            
                   
        </div>
    )

} 

export default Timer;
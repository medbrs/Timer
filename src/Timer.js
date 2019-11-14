import React from 'react'



function Timer(props) {
           var  seconds = Math.floor((props.ms / 1000) % 60)
           var  minutes = Math.floor(( props.ms/ (1000 * 60)) % 60)
           var  hours = Math.floor((props.ms / (1000 * 60 * 60)) % 24);
        
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
    return (
        <div className='menu'>
            <h1 className='numbers'>{hours + ":" + minutes + ":" + seconds }</h1>
            <p className='num'>hours Minute Second</p>
            
        </div>
        
        
    )
}








export default Timer
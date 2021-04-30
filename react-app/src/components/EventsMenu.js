import React from 'react'

function EventsMenu({clickHomerun, clickOut, clickSwingMiss}) {
    return (
        <div class="events-container">
           <button onClick={clickSwingMiss}>Swing and a Miss</button>
           <button onClick={clickOut}>Out</button>
           <button onClick={clickHomerun}>Homerun</button>
       </div>
    )
}

export default EventsMenu
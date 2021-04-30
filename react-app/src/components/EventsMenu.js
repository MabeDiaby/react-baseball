import React from 'react'

function EventsMenu({clickHomerun, clickOut}) {
    return (
        <div class="events-container">
           <button>Swing and a Miss</button>
           <button onClick={clickOut}>Out</button>
           <button onClick={clickHomerun}>Homerun</button>
       </div>
    )
}

export default EventsMenu
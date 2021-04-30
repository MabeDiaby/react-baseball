import React from 'react'

function EventsMenu({clickHomerun}) {
    return (
        <div class="events-container">
           <button>Swing and a Miss</button>
           <button>Out</button>
           <button onClick={clickHomerun}>Homerun</button>
       </div>
    )
}

export default EventsMenu
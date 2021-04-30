import React from 'react'

function InningBar() {

    const innings = Array.from(Array(6).fill(0).keys())
    const currentInning = 1

    return (
    <table>
    <tr class="inning-label">
        <td class="label">Inning</td>
        {innings.map(i => (<td>{i+1}</td>))}
    </tr>
    <tr class="inning-marker">
         <td class="label"></td>
         {innings.map(i => (
             <InningMarker currentInning={currentInning} index = {i}/>
            ))}
    </tr>
    </table>
    )
}

function InningMarker({currentInning, index}) {
    return (<td>{ currentInning - 1 === index ? "*" : ""}</td>)
}

export default InningBar
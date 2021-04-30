import React from 'react'

function ScoreBar() {
    
    const score = [Array(6).fill(0), Array(6).fill(0)]

    return (
    <table>
        <tr class="home score-row">
            <td class="team-name">
                Home
            </td>
            {score[0].map((val, index) => (<ScoreSquare scoreValue={val} index={index}/>) )}
        </tr>
        
        <tr class="away score-row">
            <td class="team-name">
                Away
            </td>
            {score[1].map((val, index) => (<ScoreSquare scoreValue={val} index={index}/>) )}
        </tr>
    </table>
    )
}

function ScoreSquare({scoreValue, index}) {
    return (<td class={"runs " + index}>{scoreValue}</td>)
}

export default ScoreBar
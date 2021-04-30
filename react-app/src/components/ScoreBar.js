import React from 'react'

function ScoreBar() {
    return (
    <table>
        <tr class="home score-row">
            <td class="team-name">
                Home
            </td>
            <td class="runs 1">0</td>
            <td class="runs 2">0</td>
            <td class="runs 3">0</td>
            <td class="runs 4">0</td>
            <td class="runs 5">0</td>
            <td class="runs 6">0</td>
        </tr>
        
        <tr class="away score-row">
            <td class="team-name">
                Away
            </td>
            <td class="runs 1">0</td>
            <td class="runs 2">0</td>
            <td class="runs 3">0</td>
            <td class="runs 4">0</td>
            <td class="runs 5">0</td>
            <td class="runs 6">0</td>
        </tr>
    </table>
    )
}

export default ScoreBar
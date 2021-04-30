import React from 'react'

function CountersBar({outs, strikes}) {
    return (
        <table>
           <tr class="details-container">
            <td class="balls-label">
                Balls:
            </td>
            <td class="balls-value">
                0
            </td>
            <td class="strikes-label">
                Strikes:
            </td>
            <td class="strikes-value">
                {strikes}
            </td>
            <td class="outs-label">
                Outs:
            </td>
            <td class="outs-value">
                {outs}
            </td>
           </tr>
       </table>
    )
}

export default CountersBar
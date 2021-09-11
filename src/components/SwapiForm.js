import React, { useState } from 'react';
import { useHistory } from 'react-router';

function SwapiForm(props) {
    let history = useHistory();
    const [id, setId]=useState('')
    const [dropdown, setDropdown]=useState('people')
    function redirect(e) {
        e.preventDefault();
        const destination='/'+dropdown+'/'+id
        console.log(destination)
        history.push(destination)
    }
    return (
        <form onSubmit={redirect}>
            <label >Search for:</label>
            <select id='dropdown' name='dropdown' onChange={(e)=>setDropdown(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>ID:</label>
            <input type="text" id='id' name='id' onChange={(e)=>setId(e.target.value)} />
            <input type="submit" />
        </form>
    )
}
export default SwapiForm
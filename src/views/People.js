import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';

const People = (props) => {
    const { id } = useParams()
    const [data, setData] = useState('')
    let history=useHistory()
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
            .then(response => setData(response.data))
            .catch(err => history.push("/error") )
    })
    return (
        <div>
            <h1>{data.name}</h1>
            <ul>
                <li>Height:{data.height}</li>
                <li>Mass:{data.mass}</li>
                <li>Hair Color:{data.hair_color}</li>
                <li>Skin Color:{data.skin_color}</li>
            </ul>
        </div>
    )
}
export default People
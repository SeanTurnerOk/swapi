import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const Planets = (props) => {
    const { id } = useParams()
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id)
        .then(response => setData(response.data))
        .catch(err => console.log(err))
    })
    return (
        <div>
            <h1>{data.name}</h1>
            <ul>
                <li>Climate:{data.climate}</li>
                <li>Terrain:{data.terrain}</li>
                <li>Surface Water:{data.surface_water}</li>
                <li>Population:{data.population}</li>
            </ul>
        </div>
    )
}
export default Planets
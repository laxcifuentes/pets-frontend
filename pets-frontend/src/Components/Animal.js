import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Animal() {
    const [animal, setAnimal] = useState(null)
    
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/animals/${id}`
            const response = await fetch(url)
            const data = await response.json()
            setAnimal(data)
        }

        fetchData()
    }, [])

    const display = animal && (
        <div>
            <img src={animal.profilePicture} alt='animal' height={'100px'} />
            <h2>Name: {animal.name}</h2>
            <h3>Age: {animal.age}</h3>
            <h3>Species: {animal.species}</h3>
            <p>Description: {animal.description}</p>
        </div>
    )
    return (
        <div>
            Animal
        </div>
    )
}

export default Animal
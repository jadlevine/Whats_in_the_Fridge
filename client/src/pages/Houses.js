import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Houses = () => {
  let navigate = useNavigate()

  //will eventually want an axios get request (with useState and useEffect) that shows all the houses in the db (and offers an "add a new house option")

  ////NEED TO SET UP HOUSE MODEL ON DB!!!////

  ///should useState {houses,setHouses}, then map through houses below to render components
  const [houses, setHouses] = useState([])

  ///and, another form (text input field?) that allows you to add a house

  const showHouse = (owner) => {
    navigate(`/houses/${owner}`)
  }

  return (
    <div className="home">
      <h1>Who's House are you adding to?</h1>
      <div
        className="house-card"
        onClick={() => showHouse('josh')}
        key={'1234'}
      >
        <h3>Josh's House</h3>
      </div>
    </div>
  )
}

export default Houses

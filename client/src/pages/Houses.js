import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddNewHouseForm from '../components/AddNewHouseForm'

const Houses = () => {
  let navigate = useNavigate()

  const [houses, setHouses] = useState([])

  //will eventually want an axios get request (with useState and useEffect) that shows all the houses in the db (and offers an "add a new house option")
  const getHouses = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/houses`)
      //pause here... go make the "add a house form"
      console.log(response.data)
      setHouses(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getHouses()
  }, [])

  const showHouse = (owner) => {
    navigate(`/houses/${owner}`)
  }

  // console.log(houses[0])

  return (
    <div className="houses">
      <div id="house-list">
        <h1>House List</h1>
        <ul>
          {houses.map((house) => (
            <li key={house._id}>
              <Link to={`/houses/${house._id}`}>{house.owner}'s House</Link>
            </li>
          ))}
        </ul>
        {/* <ul className="house-list">
          {houses.length > 0 ? (
            houses.map((house) => {
              ;<li>{house.id}</li>
            })
          ) : (
            <li>No Houses Available</li>
          )}
        </ul> */}
        {/* <div
          className="house-card"
          onClick={() => showHouse('josh')}
          key={'1234'}
        >
          <h3>Josh's House</h3>
        </div> */}
      </div>
      <AddNewHouseForm />
    </div>
  )
}

export default Houses

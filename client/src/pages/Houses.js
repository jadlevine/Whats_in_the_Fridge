import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddNewHouseForm from '../components/AddNewHouseForm'
import AddNewHouseFormTest from '../components/AddNewHouseFormTest'
import HouseListing from '../components/HouseListing'

const Houses = () => {
  //let navigate = useNavigate()

  const [houses, setHouses] = useState([])

  //will eventually want an axios get request (with useState and useEffect) that shows all the houses in the db (and offers an "add a new house option")
  const getHouses = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/houses`)
      //pause here... go make the "add a house form"
      // console.log(response.data)
      setHouses(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getHouses()
  }, [])

  //don't need this if just using Link below
  // const showHouse = (owner) => {
  //   navigate(`/houses/${owner}`)
  // }

  // console.log(houses[0])

  return (
    <div className="houses">
      <div id="house-list">
        <h1>House List</h1>
        <ul>
          {houses.map((house) => (
            // <li key={house._id}>
            <HouseListing
              key={house._id}
              house={house}
              setHouses={setHouses}
              houses={houses}
            />

            // </li>
          ))}
        </ul>
      </div>
      {/* <AddNewHouseForm setHouses={setHouses} houses={houses} /> */}
      <AddNewHouseFormTest setHouses={setHouses} houses={houses} />
    </div>
  )
}

export default Houses

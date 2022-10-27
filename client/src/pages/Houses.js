import { useState, useEffect } from 'react'
import axios from 'axios'
import AddNewHouseForm from '../components/AddNewHouseForm'
import HouseListing from '../components/HouseListing'

const Houses = () => {
  //let navigate = useNavigate()
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/houses`)
      setHouses(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getHouses()
  }, [])

  return (
    <div className="houses">
      <div id="house-list">
        <h1>House List</h1>
        <ul>
          {houses.map((house) => (
            <HouseListing
              key={house._id}
              house={house}
              setHouses={setHouses}
              houses={houses}
            />
          ))}
        </ul>
      </div>
      <AddNewHouseForm setHouses={setHouses} houses={houses} />
    </div>
  )
}

export default Houses

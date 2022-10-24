import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Food from '../components/Food'

const HouseDetails = (props) => {
  let { owner } = useParams()

  // const [houseDetails, setHouseDetails] = useState('')
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const getFoods = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/foods`)
        console.log(response.data)
        setFoods(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFoods()
  }, [])

  return (
    <div>
      <h1>{owner}'s House</h1>
      <div id="joshs-fridge">
        <h3>Josh's Fridge</h3>
        <ul className="rearch-results">
          {foods.map((food) => (
            <Food
              key={food._id}
              name={food.name}
              owner={food.owner}
              location={food.location}
            />
          ))}
        </ul>
      </div>
      <h3>Josh's Freezer</h3>
      <h3>Josh's Pantry</h3>
    </div>
  )
}

export default HouseDetails

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Food from '../components/Food'

const HouseDetails = (props) => {
  let { owner } = useParams()

  // const [houseDetails, setHouseDetails] = useState('')
  // const [foods, setFoods] = useState([])
  const [fridgeContents, setFridgeContents] = useState([])

  useEffect(() => {
    const getFridgeFoods = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/foods`)
        console.log(response.data)
        setFridgeContents(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFridgeFoods()
  }, [])

  const deleteFood = async (event) => {
    try {
      //axios request
      const response = await axios.delete(
        `http://localhost:3001/foods/${event.target.id}`
      )
      //update state of fridgeContents
      let updatedFridgeContents = []
      fridgeContents.map((food) => {
        if (food._id !== event.target.id) {
          updatedFridgeContents.push(food)
        }
      })
      setFridgeContents(updatedFridgeContents)
    } catch (err) {
      console.log(err)
    }
    // console.log(event.target.id)
  }

  const updateFood = async (event) => {
    try {
      //axios request
      //HERE////
      const response = await axios.update(
        `http://localhost:3001/foods/${event.target.id}`
      )
      // //update state of fridgeContents
      // let updatedFridgeContents = []
      // fridgeContents.map((food) => {
      //   if (food._id !== event.target.id) {
      //     updatedFridgeContents.push(food)
      //   }
      // })
      // setFridgeContents(updatedFridgeContents)
    } catch (err) {
      console.log(err)
    }
    // console.log(event.target.id)
  }

  return (
    <div>
      <h1>{owner}'s House</h1>
      <div id="joshs-fridge">
        <h3>Josh's Fridge</h3>
        <ul className="rearch-results">
          {fridgeContents.map((food) => (
            <Food
              key={food._id}
              id={food._id}
              name={food.name}
              owner={food.owner}
              location={food.location}
              deleteFood={deleteFood}
              updateFood={updateFood}
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

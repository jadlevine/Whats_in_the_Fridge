import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import FoodListing from '../components/FoodListing'
import AddNewFoodForm from '../components/AddNewFoodForm'
import AddNewStorageForm from '../components/AddNewStorageForm'
import StorageListing from '../components/StorageListing'

const HouseDetails = () => {
  let { houseid } = useParams()
  // console.log(houseid)
  const [house, setHouse] = useState({})

  //make axios request to pull up house document
  const getHouse = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/houses/${houseid}`
      )
      // console.log(response)
      setHouse(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  //run gethouse on load
  useEffect(() => {
    getHouse()
  }, [])

  //this belongs here, somwhere:
  // //state of new storage type
  // const [newStorage, setNewStorage] = useState({
  //   storageType: '',
  //   storageLocation: '',
  //   foods: []
  // })

  // const [houseDetails, setHouseDetails] = useState('')
  // const [foods, setFoods] = useState([])
  // const [fridgeContents, setFridgeContents] = useState([])
  // const [updated, setUpdated] = useState(false)

  // //maybe just just this to ALWAYS recall, rerender the whol list, anytime there is ANY UPDATE (create,delete,update)
  // const getFridgeFoods = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/foods`)
  //     console.log(response.data)
  //     setFridgeContents(response.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   getFridgeFoods()
  // }, [])

  //do this AFTER you figure out create food form!!
  // const updateFood = async (event) => {
  //   try {
  //     //axios request
  //     //HERE////
  //     const response = await axios.update(
  //       `http://localhost:3001/foods/${event.target.id}`
  //     )
  //     // //update state of fridgeContents
  //     // let updatedFridgeContents = []
  //     // fridgeContents.map((food) => {
  //     //   if (food._id !== event.target.id) {
  //     //     updatedFridgeContents.push(food)
  //     //   }
  //     // })
  //     // setFridgeContents(updatedFridgeContents)
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   // console.log(event.target.id)
  // }

  return (
    <div>
      <h1>{house.owner}'s House</h1>
      <div className="house-content">
        <div className="storage-list">
          {house.storages &&
            house.storages.map((storage) => (
              <StorageListing
                key={storage._id}
                storage={storage}
                house={house}
                setHouse={setHouse}
              />
            ))}
        </div>
        <div className="house-forms">
          <AddNewStorageForm house={house} setHouse={setHouse} />
          <AddNewFoodForm house={house} setHouse={setHouse} />
        </div>
      </div>
      {/* <div>
      </div>
      <div id="joshs-fridge">
        <h3>Josh's Fridge</h3>
        <ul className="rearch-results">
          {fridgeContents.map((food) => (
            <FoodListing
              key={food._id}
              id={food._id}
              name={food.name}
              owner={food.owner}
              location={food.location}
              getFridgeFoods={getFridgeFoods}
            />
          ))}
        </ul>
      </div>
      <h3>Josh's Freezer</h3>
      <h3>Josh's Pantry</h3> */}
    </div>
  )
}

export default HouseDetails

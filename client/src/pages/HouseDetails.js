import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import FoodListing from '../components/FoodListing'
import AddNewFoodForm from '../components/AddNewFoodForm'
import FoodUpdateForm from '../components/FoodUpdateForm'

// import AddNewStorageForm from '../components/AddNewStorageForm'
// import StorageListing from '../components/StorageListing'

const HouseDetails = () => {
  let { houseid } = useParams()
  // console.log(houseid)
  const [house, setHouse] = useState([])
  const [houseUpdate, setHouseUpdate] = useState(true)
  const [foodToUpdate, setFoodToUpdate] = useState([])

  //get house document
  const getHouse = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/houses/${houseid}`
      )
      // console.log(response.data)
      setHouse(response.data)
      setHouseUpdate(false)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getHouse()
  }, [houseUpdate])

  ///conditionally render storage contents if they exist, otherwise, render message that storage is empty and suggest they add something, using the add food form
  return (
    <div>
      <h1>{house?.owner}'s House</h1>
      <div className="house-content">
        <div className="food-storages">
          <div className="fridge storage">
            <h3>Fridge</h3>
            <ul>
              {house?.fridge?.map((food) => (
                <FoodListing
                  key={food._id}
                  food={food}
                  house={house}
                  setHouse={setHouse}
                  setHouseUpdate={setHouseUpdate}
                  setFoodToUpdate={setFoodToUpdate}
                />
              ))}
            </ul>
          </div>
          <div className="freezer storage">
            <h3>Freezer</h3>
            <ul>
              {house?.freezer?.map((food) => (
                <FoodListing
                  key={food._id}
                  food={food}
                  house={house}
                  setHouse={setHouse}
                  setHouseUpdate={setHouseUpdate}
                  setFoodToUpdate={setFoodToUpdate}
                />
              ))}
            </ul>
          </div>
          <div className="pantry storage">
            <h3>Pantry</h3>
            <ul>
              {house?.pantry?.map((food) => (
                <FoodListing
                  key={food._id}
                  food={food}
                  house={house}
                  setHouse={setHouse}
                  setHouseUpdate={setHouseUpdate}
                  setFoodToUpdate={setFoodToUpdate}
                />
              ))}
            </ul>
          </div>
          <div className="otherStorage storage">
            <h3>Other Storage</h3>
            <ul>
              {house?.otherStorage?.map((food) => (
                <FoodListing
                  key={food._id}
                  food={food}
                  house={house}
                  setHouse={setHouse}
                  setHouseUpdate={setHouseUpdate}
                  setFoodToUpdate={setFoodToUpdate}
                />
              ))}
            </ul>
          </div>
        </div>
        {/*end of food-storages */}
        <div className="house-forms">
          <AddNewFoodForm
            house={house}
            setHouse={setHouse}
            setHouseUpdate={setHouseUpdate}
          />
          {foodToUpdate.name ? (
            <FoodUpdateForm
              foodToUpdate={foodToUpdate}
              setHouseUpdate={setHouseUpdate}
              house={house}
              setFoodToUpdate={setFoodToUpdate}
            />
          ) : (
            <p>Click See Details to view and update</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default HouseDetails

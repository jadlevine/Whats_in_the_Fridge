import { useState, useEffect } from 'react'
import axios from 'axios'

const FoodUpdateForm = (props) => {
  //props = foodToUpdate, house, setHouseUpdate, setFoodToUpdate
  const [initialFood, setInitialFood] = useState(props.foodToUpdate)
  const [updatedFood, setUpdatedFood] = useState(props.foodToUpdate)

  //is this necessary if we have food details from state?
  ///only thing missing is owner name... which, we don't need to update...UNLESS we are trying to give the food to someone else...
  const getFoodDetails = async (event) => {
    event.preventDefault()
    //axios call to grab food document
  }

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    setUpdatedFood({ ...updatedFood, [name]: value })
  }

  const submitUpdate = async (event) => {
    event.preventDefault()
    console.log('update requested')

    //updated food in food collection
    try {
      let foodupdate = await axios.put(
        `http://localhost:3001/foods/${updatedFood._id}`,
        updatedFood
      )

      //if location was updated, update the two location of the house locally, then send in house model update
      if (initialFood.storage !== updatedFood.storage) {
        //update old storage locally
        let oldStorageIds = props.house[initialFood.storage].map((foodDoc) => {
          return foodDoc._id
        })
        let updatedOldStorage = oldStorageIds.filter((foodid) => {
          return foodid !== updatedFood._id
        })
        //update new storage
        let newStorageIds = props.house[updatedFood.storage].map((foodDoc) => {
          return foodDoc._id
        })
        newStorageIds.push(updatedFood._id)

        //send updated storage lists into housemodel
        try {
          let houseupdateNewStorage = await axios.put(
            `http://localhost:3001/houses/${initialFood.house}`,
            {
              [updatedFood.storage]: newStorageIds
            }
          )
          let houseupdateOldStorage = await axios.put(
            `http://localhost:3001/houses/${initialFood.house}`,
            {
              [initialFood.storage]: updatedOldStorage
            }
          )

          //reset housedetails
          props.setHouseUpdate(true)
          //reset foodTOUpdate
          props.setFoodToUpdate([])
        } catch (err) {
          console.log(err)
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="add-form">
      <form onSubmit={submitUpdate}>
        <h3>Food Details</h3>
        <div className="food-details">
          <label>
            Name:
            <input
              type="text"
              value={updatedFood.name}
              onChange={handleChange}
              name={'name'}
              placeholder={initialFood.name}
            />
          </label>
          <br />
          <label>
            Storage Location:
            <select
              name="storage"
              value={updatedFood.storage}
              onChange={handleChange}
            >
              <option value="fridge">Fridge</option>
              <option value="freezer">Freezer</option>
              <option value="pantry">Pantry</option>
              <option value="otherStorage">Other Storage</option>
            </select>
          </label>
          <br />
          <label>
            Opened?
            <input
              name="opened"
              type="checkbox"
              onChange={handleChange}
              checked={updatedFood.checked}
              className="checkbox"
            />
          </label>
          <br />
          <label>
            Notes:
            <textarea
              // type="textarea"
              value={updatedFood.notes}
              onChange={handleChange}
              name={'notes'}
              placeholder={initialFood.notes}
            />
          </label>
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FoodUpdateForm

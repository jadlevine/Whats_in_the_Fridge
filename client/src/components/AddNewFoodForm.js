import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AddNewFoodForm = (props) => {
  //props = house, setHouse
  //house state is not available upon initial load?
  let { houseid } = useParams()

  const [newFood, setNewFood] = useState({
    name: '',
    house: houseid
  })

  // const [newFood, setNewFood] = useState({
  //   name: '',
  //   house: '',
  //   location: '',
  //   opened: false,
  //   notes: [],
  //   //need to go up to house details and be able to dynamically pass owner variable to this. then below should just automatically be whoever's housedetail page you are on
  //   owner: 'josh',
  //   //hardcoding the line below to be ANYTHING solves the   message: 'Path `location` is required.', error on the db connection
  //   location: ''
  // })

  const handleChange = (event) => {
    setNewFood({ ...newFood, [event.target.name]: event.target.value })
  }

  const addFood = async (event) => {
    event.preventDefault()
    //make axios call here with newFood

    //add food to db( food collection (with house id))
    try {
      let response = await axios.post(`http://localhost:3001/foods`, newFood)

      //update the foods array LOCALLY
      let localFoodsArray
      if (props.house.foods) {
        localFoodsArray = [...props.house.foods, response.data._id]
      } else {
        localFoodsArray = [response.data._id]
      }

      //update the house in db
      try {
        let houseupdate = await axios.put(
          `http://localhost:3001/houses/${props.house._id}`,
          { foods: localFoodsArray }
        )

        //update the house state
        props.setHouse(houseupdate.data)
      } catch (err) {
        console.log(err)
      }

      ///HERE...going back to HouseDetails.js
      ///then https://mongoosejs.com/docs/populate.html#:~:text=so%20far%20we%20haven't%20done%20anything%20much%20different.%20we've%20merely%20created%20a%20person%20and%20a%20story.%20now%20let's%20take%20a%20look%20at%20populating%20our%20story's

      //oldish?
      // https://github.com/SEI-R-9-19/u2_lesson_react_forms/blob/solution/client/src/components/Form.js#:~:text=setformstate(initialstate)
      // setFormState(initialState)
      // props.getFridgeFoods()
      // props.setFridgeContents(...props.fridgeContents, response.data)
    } catch (err) {
      console.log(err)
    }
  } //end of addFood function

  //return a form that has handleChange, and onSubmit (button)
  //add more of the house fields later (notes, etc...)
  return (
    <form onSubmit={addFood}>
      <h3>Add a Food!</h3>
      <input
        type="text"
        value={newFood.name}
        onChange={handleChange}
        name={'name'}
        placeholder={'name (required)'}
      />
      {/* <input
        type="text"
        value={newFood.location}
        onChange={handleChange}
        name={'location'}
        placeholder={'stoarge location (required)'}
      /> */}
      <button>Submit: aka add to fridge</button>
    </form>
  )
}

export default AddNewFoodForm

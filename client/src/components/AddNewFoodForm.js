import { useState } from 'react'
import axios from 'axios'

const AddNewFoodForm = (props) => {
  //props.fridgeContents
  //props.setFridgeContents

  const [newFood, setNewFood] = useState({
    name: '',
    //need to go up to house details and be able to dynamically pass owner variable to this. then below should just automatically be whoever's housedetail page you are on
    owner: 'josh',

    ///YOU ARE HERE... hardcoding the line below to be ANYTHING solves the   message: 'Path `location` is required.', error on the db connection
    location: ''
  })

  const handleChange = (event) => {
    setNewFood({ ...newFood, [event.target.name]: event.target.value })
  }

  const addFood = async (event) => {
    event.preventDefault()
    //make axios call here with newFood
    try {
      let response = await axios.post(`http://localhost:3001/foods`, newFood)
      console.log(response.data)
      // https://github.com/SEI-R-9-19/u2_lesson_react_forms/blob/solution/client/src/components/Form.js#:~:text=setformstate(initialstate)
      // setFormState(initialState)
      props.getFridgeFoods()
      // props.setFridgeContents(...props.fridgeContents, response.data)
    } catch (err) {
      console.log(err)
    }
  }

  //return a form that has handleChange, and onSubmit (button)
  //add more of the house fields later (notes, etc...)
  return (
    <form onSubmit={addFood}>
      <input
        type="text"
        value={newFood.name}
        onChange={handleChange}
        name={'name'}
        placeholder={'name (required)'}
      />
      <input
        type="text"
        value={newFood.location}
        onChange={handleChange}
        name={'location'}
        placeholder={'stoarge location (required)'}
      />
      <button>Submit: aka add to fridge</button>
    </form>
  )
}

export default AddNewFoodForm

import { useState } from 'react'
import axios from 'axios'

const NewFood = (props) => {
  //props.fridgeContents
  //props.setFridgeContents

  const [newFood, setNewFood] = useState({
    name: '',
    //need to go up to house details and be able to dynamically pass owner variable to this. then below should just automatically be whoever's housedetail page you are on
    owner: 'josh',
    location: ''
  })

  const handleChange = (event) => {
    setNewFood({ ...newFood, [event.target.name]: event.target.value })
  }

  const addFood = async (event) => {
    event.preventDefault()
    console.log(newFood)
    //make axios call here with newFood
    try {
      const response = await axios.post(
        `http://localhost:3001/foods/${newFood.owner}/fridge/${newFood.name}`
      )
      console.log(response.data)
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

export default NewFood

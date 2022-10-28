import { useState } from 'react'
import axios from 'axios'

const AddNewHouseForm = (props) => {
  const [newHouse, setNewHouse] = useState({
    owner: '',
    fridge: [],
    freezer: [],
    pantry: [],
    otherStorage: []
  })

  const addHouse = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post(`http://localhost:3001/houses`, newHouse)
      //update houses state from parent
      props.setHouses([...props.houses, response.data])
      //reset newHouse state (and form)
      setNewHouse({
        owner: '',
        fridge: [],
        freezer: [],
        pantry: [],
        otherStorage: []
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    setNewHouse({ ...newHouse, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <form className="add-form">
        <h3>Add Your House!</h3>
        <input
          name="owner"
          type="text"
          value={newHouse.owner}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="text-input"
        />
        <button onClick={addHouse}>Submit</button>
      </form>
    </div>
  )
}
export default AddNewHouseForm

//old
// let starterStorageOptions = [
//   {
//     name: 'fridge',
//     display: 'Fridge',
//     active: false,
//     location: ''
//   },
//   {
//     name: 'freezer',
//     display: 'Freezer',
//     active: false,
//     location: ''
//   },
//   {
//     name: 'pantry',
//     display: 'Pantry',
//     active: false,
//     location: ''
//   },
//   {
//     name: 'spicerack',
//     display: 'Spice Rack',
//     active: false,
//     location: ''
//   }
// ]

// let storageOptions = ['fridge', 'freezer', 'pantry', 'spicerack', 'other']
// let locationOptions = ['kitchen', 'garage', 'utility', 'basement', 'other']

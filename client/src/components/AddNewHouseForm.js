import { useState } from 'react'
import axios from 'axios'

const AddNewHouseForm = () => {
  //state of new house
  const [newHouse, setNewHouse] = useState({
    owner: '',
    storages: [],
    fridge: false,
    freezer: false,
    pantry: false
  })

  const addHouse = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.create(
        `http://localhost:3001/houses`,
        newHouse
      )
      console.log(response)
      console.log(response.data)
      //do something to re-render the Houses (parent) page to show the newly added house
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    const target = event.target
    if (target.type === 'checkbox') {
      target.value = target.checked
    } else {
      target.value = target.value
    }
    setNewHouse({ ...newHouse, [target.name]: target.value })
  }

  return (
    <div className="add-house form">
      <form onSubmit={addHouse}>
        <p>Add a House</p>
        <label>
          Owner:
          <input
            name="owner"
            type="text"
            value={newHouse.owner}
            onChange={handleChange}
            placeholder={`required`}
          />
        </label>
        <label>
          Fridge?
          <input
            name="fridge"
            type="checkbox"
            onChange={handleChange}
            checked={newHouse.fridge}
          />
        </label>
        <label>
          Freezer?
          <input
            name="freezer"
            type="checkbox"
            onChange={handleChange}
            checked={newHouse.freezer}
          />
        </label>
        <label>
          Pantry?
          <input
            name="pantry"
            type="checkbox"
            onChange={handleChange}
            checked={newHouse.pantry}
          />
        </label>
        <p>You can add more storages later</p>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default AddNewHouseForm

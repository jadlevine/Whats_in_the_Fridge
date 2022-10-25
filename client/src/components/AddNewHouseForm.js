import { useState } from 'react'
import axios from 'axios'

const AddNewHouseForm = () => {
  //state of new house
  const [newHouse, setNewHouse] = useState({
    owner: '',
    storages: [],
    fridge: false,
    fridgelocation: '',
    freezer: false,
    freezerlocation: '',
    pantry: false,
    pantrylocation: '',
    spicerack: false,
    spiceracklocation: ''
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
    // console.log(event.target)
    const target = event.target
    const name = target.name
    //not 100% sure how checkboxes are working here
    ///ref: https://reactjs.org/docs/forms.html
    const value = target.type === 'checkbox' ? target.checked : target.value
    setNewHouse({ ...newHouse, [name]: value })
  }

  //a nice clean up might be to map through the storage/locations to render them, rather than the storage options below being sooo repetitive
  //even better... conditionally render drop down IF stoarge type is checked (this is functional now!)
  return (
    <div>
      <form id="add-house-form" onSubmit={addHouse}>
        <h3>Add a House</h3>
        <label>
          Owner:
          <input
            name="owner"
            type="text"
            value={newHouse.owner}
            onChange={handleChange}
            placeholder={`name required`}
            className="text-input"
          />
        </label>
        <br />
        <div id="storage-options">
          <div>
            <input
              name="fridge"
              type="checkbox"
              onChange={handleChange}
              checked={newHouse.fridge}
              className="checkbox"
            />
            <label>Fridge</label>
            {newHouse.fridge && (
              <select
                name="fridgelocation"
                value={newHouse.fridgelocation.value}
                defaultValue=""
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a Location
                </option>
                <option value="kitchen">Kitchen</option>
                <option value="garage">Garage</option>
                <option value="utilityroom">Utility Room</option>
                <option value="other">Other</option>
              </select>
            )}
          </div>
          <div>
            <input
              name="freezer"
              type="checkbox"
              onChange={handleChange}
              checked={newHouse.freezer}
              className="checkbox"
            />
            <label>Freezer</label>
            {newHouse.freezer && (
              <select
                name="freezerlocation"
                value={newHouse.freezerlocation.value}
                onChange={handleChange}
                required
              >
                <option defaultValue="" disabled>
                  Select a Location
                </option>
                <option value="kitchen">Kitchen</option>
                <option value="garage">Garage</option>
                <option value="utilityroom">Utility Room</option>
                <option value="other">Other</option>
              </select>
            )}
          </div>
          <div>
            <input
              name="pantry"
              type="checkbox"
              onChange={handleChange}
              checked={newHouse.pantry}
              className="checkbox"
            />
            <label>Pantry</label>
            {newHouse.pantry && (
              <select
                name="pantrylocation"
                value={newHouse.pantrylocation.value}
                onChange={handleChange}
                required
              >
                <option defaultValue="" disabled>
                  Select a Location
                </option>
                <option value="kitchen">Kitchen</option>
                <option value="garage">Garage</option>
                <option value="utilityroom">Utility Room</option>
                <option value="other">Other</option>
              </select>
            )}
          </div>
          <div>
            <input
              name="spicerack"
              type="checkbox"
              onChange={handleChange}
              checked={newHouse.spicerack}
              className="checkbox"
            />
            <label>Spice Rack</label>
            {newHouse.spicerack && (
              <select
                name="spiceracklocation"
                value={newHouse.spiceracklocation.value}
                onChange={handleChange}
                required
              >
                <option defaultValue="" disabled>
                  Select a Location
                </option>
                <option value="kitchen">Kitchen</option>
                <option value="garage">Garage</option>
                <option value="utilityroom">Utility Room</option>
                <option value="other">Other</option>
              </select>
            )}
          </div>
        </div>
        <p>You can edit storages later</p>
        <button onClick={addHouse}>Submit</button>
      </form>
    </div>
  )
}

export default AddNewHouseForm

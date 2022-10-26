import { useState } from 'react'
import axios from 'axios'

const AddNewStorageForm = (props) => {
  // console.log(props.house)
  const [newStorage, setNewStorage] = useState({
    storageType: '',
    storageLocation: '',
    foods: []
  })

  const addStorage = async (event) => {
    event.preventDefault()
    //update the housestate vis props?
    //use props.house to update?
    //other.... nmongoose magic!

    let newStorageArray
    if (props.house.storages.length === 0) {
      console.log('empty array')
      newStorageArray = [newStorage]
    } else {
      console.log('non-empty array')
      newStorageArray = [...props.house.storages, newStorage]
    }
    console.log(newStorageArray)
    try {
      //this will be a PUT request to the HouseModel
      let response = await axios.put(
        `http://localhost:3001/houses/${props.house._id}`,
        { storages: newStorageArray }
      )
      console.log(response.data)
      ////////YOU ARE HERE////////////
      //this is working, but REALLY BUGGY...
      //need to...debug
      //need to update parent(HouseDetails), and retrigger getHouse up in HouseDetails
      ///SO THAT, house state is updated from db...?
      ////OR no extra axios call required, just update from front-end memory?
      props.setHouse(response.data)

      // //update houses list from parent
      // props.setHouses([...props.houses, response.data])
      //reset the form
      setNewStorage({
        storageType: '',
        storageLocation: '',
        foods: []
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    // if (event.target.name === 'owner') {
    setNewStorage({ ...newStorage, [event.target.name]: event.target.value })
    // }
  }

  return (
    <div>
      <form id="add-storage-form">
        <h3>Add A Storage!</h3>
        <input
          name="storageType"
          type="text"
          value={newStorage.storageType}
          onChange={handleChange}
          placeholder="Enter the Type"
          className="text-input"
        />
        <input
          name="storageLocation"
          type="text"
          value={newStorage.storageLocation}
          onChange={handleChange}
          placeholder="Enter the Location"
          className="text-input"
        />
        <button onClick={addStorage}>Submit</button>
      </form>
    </div>
  )
}
export default AddNewStorageForm

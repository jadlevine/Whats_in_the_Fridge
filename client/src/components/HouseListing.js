import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//each HouseListing shows name of owner, details button (navigate to house details), and delete button (if NOT protected)

const HouseListing = (props) => {
  let navigate = useNavigate()
  const houseid = props.house._id

  //protect josh and nora house
  const protectedHouses = [
    '635a86cf6ad17f91a7685674',
    '635a880bf5047a380f004a3c'
  ]
  const houseProtected = protectedHouses.includes(houseid)

  const deleteHouse = async (event) => {
    event.preventDefault()

    //delete house from db
    try {
      const deleted = await axios.delete(
        `http://localhost:3001/houses/${houseid}`
      )

      //remove deleted from houses state
      let updatedHouses = props.houses.filter((house) => {
        return house._id !== deleted.data._id
      })
      props.setHouses(updatedHouses)
    } catch (err) {
      console.log(err)
    }
  }

  const seeDetails = () => {
    navigate(`/houses/${houseid}`)
  }

  return (
    <li className="list-item">
      <div>{props.house.owner}'s House</div>
      <button className={houseid} onClick={seeDetails}>
        Details
      </button>
      {!houseProtected && (
        <button className={houseid} onClick={deleteHouse}>
          Delete
        </button>
      )}
    </li>
  )
}

export default HouseListing

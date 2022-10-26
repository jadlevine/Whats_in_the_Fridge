import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HouseListing = (props) => {
  let navigate = useNavigate()
  const houseid = props.house._id
  console.log(houseid)

  //each houselisting should show the name of the house, and a delete button (if appropriate)
  //see details button should navigat them to housedetails page
  //then hosuedetails page can make a new api call based on id in param

  const deleteHouse = async (event) => {
    event.preventDefault()
    try {
      const deleted = await axios.delete(
        `http://localhost:3001/houses/${houseid}`
      )

      //remove deleted from houses
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
      <button className={houseid} onClick={deleteHouse}>
        Delete
      </button>
    </li>
  )
}

export default HouseListing

/* <Link to={`/houses/${house._id}`}>{house.owner}'s House</Link>
              <button className={house._id} onClick={deleteHouse}>
                Delete
              </button> */

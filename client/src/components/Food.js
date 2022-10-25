import axios from 'axios'

const Food = (props) => {
  const foodId = props.id
  //insert a delete button  here and then make it functional, then update button...add food should be a form that is NOT in this component
  const deleteFood = async (event) => {
    console.log(event.target.id)
    console.log(event.target.name)
    try {
      //axios request
      const response = await axios.delete(
        `http://localhost:3001/foods/${event.target.id}`
      )
      //recall food rendering
      props.getFridgeFoods()
      // //update state of fridgeContents
      // let updatedFridgeContents = []
      // fridgeContents.map((food) => {
      //   if (food._id !== event.target.id) {
      //     updatedFridgeContents.push(food)
      //   }
      // })
      // setFridgeContents(updatedFridgeContents)
    } catch (err) {
      console.log(err)
    }
  }

  const updateFood = async (event) => {
    //not sure if we need to prevent default here?
    event.preventDefault()
    console.log('update requested')
    console.log(foodId)

    //ideally --> coniditionally render a form with food details, and be able to change them, update the food object, then send axios.put with the updated object

    //make axios call here with newFood
    try {
      const response = await axios.put(
        // `http://localhost:3001/foods/josh/pantry/${event.target.name}`
        `http://localhost:3001/foods/${foodId}`
      )
      console.log(response.data)
      props.getFridgeFoods()
      // props.setFridgeContents(...props.fridgeContents, response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <li>
      {props.name} :{props.owner}'s {props.location}{' '}
      <button id={props.id} onClick={deleteFood}>
        X
      </button>
      <button onClick={updateFood}> update</button>
    </li>
  )
}

export default Food

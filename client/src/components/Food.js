import axios from 'axios'

const Food = (props) => {
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
    console.log('update requested')
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

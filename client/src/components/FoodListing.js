import axios from 'axios'

//each FoodListing shows name, details/update button (/////DO Something), and delete button (if not protected? or house not protected?)

////maybe checkbox for if opened or not
const FoodListing = (props) => {
  //props = food, house, setHouse, setHouseUpdate, setFoodToUpdate
  let foodid = props.food._id

  const deleteFood = async (event) => {
    event.preventDefault()
    console.log('deleteFood')

    //delete food from db
    try {
      //this should BOTH delete the food, AND delete the reference to the food in the house
      const deleted = await axios.delete(
        `http://localhost:3001/foods/${foodid}`
      )
      console.log(deleted)

      // //update the house in db (remove food reference from appropriate storage)
      // const updatedHouse = await axios.put(
      //   `http://localhost:3001/houses/${props.house._id}`,
      //   { [deleted.storage]: props.somethingsomething } ///////you are here...
      // )

      //trigger rerender
      props.setHouseUpdate(true) //and then, just don't do the below??

      // //remove deleted from appropriate storage in house state
      // let currStorage = props.food.storage
      // let currFoods = props.house[currStorage]
      // console.log(currFoods)
      // let updatedFoods = currFoods.filter((foodItem) => {
      //   return foodItem._id !== deleted.data._id
      // })
      // props.setHouse({ ...props.house, [currStorage]: updatedFoods })
    } catch (err) {
      console.log(err)
    }
  }

  const updateDetails = () => {
    props.setFoodToUpdate(props.food)
  }

  return (
    <li className="list-item">
      <div>{props.food.name}</div>
      <div className="buttons-list">
        <button className={foodid} onClick={deleteFood}>
          Delete
        </button>
        <button className={foodid} onClick={updateDetails}>
          See Details
        </button>
      </div>
    </li>
  )
}

export default FoodListing

//   const foodId = props.id
//   //insert a delete button  here and then make it functional, then update button...add food should be a form that is NOT in this component
//   const deleteFood = async (event) => {
//     console.log(event.target.id)
//     console.log(event.target.name)
//     try {
//       //axios request
//       const response = await axios.delete(
//         `http://localhost:3001/foods/${event.target.id}`
//       )
//       //recall food rendering
//       props.getFridgeFoods()
//       // //update state of fridgeContents
//       // let updatedFridgeContents = []
//       // fridgeContents.map((food) => {
//       //   if (food._id !== event.target.id) {
//       //     updatedFridgeContents.push(food)
//       //   }
//       // })
//       // setFridgeContents(updatedFridgeContents)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const updateFood = async (event) => {
//     //not sure if we need to prevent default here?
//     event.preventDefault()
//     console.log('update requested')
//     console.log(foodId)

//     //ideally --> coniditionally render a form with food details, and be able to change them, update the food object, then send axios.put with the updated object

//     //make axios call here with newFood
//     try {
//       const response = await axios.put(
//         // `http://localhost:3001/foods/josh/pantry/${event.target.name}`
//         `http://localhost:3001/foods/${foodId}`
//       )
//       console.log(response.data)
//       props.getFridgeFoods()
//       // props.setFridgeContents(...props.fridgeContents, response.data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <li>
//       {props.name} :{props.owner}'s {props.location}{' '}
//       <button id={props.id} onClick={deleteFood}>
//         X
//       </button>
//       <button onClick={updateFood}> update</button>
//     </li>
//   )
// }

// export default FoodListing

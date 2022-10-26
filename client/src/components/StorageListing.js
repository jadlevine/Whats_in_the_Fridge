import FoodListing from './FoodListing'

const StorageListing = (props) => {
  let storage = props.storage
  let storageType = storage.storageType
  let storageLocation = storage.storageLocation
  let storageid = storage._id
  let foods = storage.foods

  //props are: storage (object), house (state), setHouse (state method)

  return (
    <div>
      <h2>
        {storageType} in {storageLocation}
      </h2>
      <ul className="foods-in-storage">
        {foods &&
          foods.map((food, index) => <FoodListing key={index} food={food} />)}
      </ul>
    </div>
  )
}

export default StorageListing

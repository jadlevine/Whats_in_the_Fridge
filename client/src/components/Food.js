const Food = (props) => {
  //insert a delete button  here and then make it functional, then update button...add food should be a form that is NOT in this component

  return (
    <li>
      {props.name} :{props.owner}'s {props.location}{' '}
      <button id={props.id} onClick={props.deleteFood}>
        X
      </button>
    </li>
  )
}

export default Food

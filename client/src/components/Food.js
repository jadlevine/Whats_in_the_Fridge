const Food = (props) => {
  return (
    <li>
      {props.name} :{props.owner}'s {props.location}
    </li>
  )
}

export default Food

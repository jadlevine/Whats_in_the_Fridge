import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const showHouse = (owner) => {
    navigate(`/houses/${owner}`)
  }

  return (
    <div className="home">
      <h1>What's in the Fridge?</h1>
      <div
        className="house-card"
        onClick={() => showHouse('josh')}
        key={'1234'}
      >
        <h3>Josh's House</h3>
      </div>
    </div>
  )
}

export default Home

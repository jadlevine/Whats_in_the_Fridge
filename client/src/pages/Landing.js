import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h3>Welcome to:</h3>
      <h1>What's in the Fridge?</h1>
      <p>
        An app that helps solve the age old questions, "what can I eat?", and "I
        know I bought pickles, where did I put them?", or "Do I have oatmeal?",
        and many others.
      </p>
      <p>
        Click <Link to="/houses">here</Link> to go directly to the list of
        Houses, or use the navigation bar at top to look around. Have Fun!
      </p>
    </div>
  )
}

export default Landing

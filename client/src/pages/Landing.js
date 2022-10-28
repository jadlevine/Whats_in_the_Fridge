import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div id="landing-page">
      <h3>Welcome to:</h3>
      <h1>What's in the Fridge?</h1>
      <div id="landing-about">
        An app that helps solve the age old questions, like:
        <div id="questions-list">
          <div>"I know I bought pickles... where did I put them?"</div>
          <div>"Do I have oatmeal?"</div>
          <div>"What should I eat?"</div>
        </div>
      </div>
      <br />
      <div>
        Click <Link to="/houses">here</Link> to go directly to the list of
        Houses, or use the navigation bar at top to look around. Have Fun!
      </div>
    </div>
  )
}

export default Landing

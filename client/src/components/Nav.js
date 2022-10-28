import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>What's in the Fridge?</h4>
      <div className="nav-links">
        <Link to="/">Landing</Link>
        <Link to="/houses">Houses</Link>
        {/* <Link to="/about">About</Link> */}
      </div>
    </nav>
  )
}

export default Nav

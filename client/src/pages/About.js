const About = () => {
  return (
    <>
      <h3>About:</h3>
      <h1>What's in the Fridge?</h1>
      <div className="outside-links">
        <a href="https://github.com/jadlevine/whats_in_the_fridge">GitHub</a>
        <a href="https://trello.com/b/6KozxWYt/whats-in-the-fridge">Trello</a>
      </div>
      <div className="futurefeatures">
        <h3>Future Features</h3>
        <ul>
          <li>
            Borrow a cup of sugar - check to see if any of your friends have the
            food you're looking for
          </li>
          <li>
            What should I make? - see suggested recipes based on the ingredients
            you have at home
          </li>
        </ul>
      </div>
    </>
  )
}

export default About

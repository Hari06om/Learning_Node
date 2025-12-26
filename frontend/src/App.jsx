import { useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
    <h1>
      Chai and fullstack development!
    </h1>
    <p>
      Jokes count: {jokes.length}
    </p>
    {
      jokes.map((joke, index) => (
        <div key={joke.id }>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))
      }
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import { useActionState } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useState(() => {
    axios.get('/api/jokes').
      then((responce) => {
        setJokes(responce.data)
      }).
      catch((error) => {
        console.log(error)
      })

  })
  return (
    <>
      <h1>Hello Frontend!</h1>
      <p>Jokes :{jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

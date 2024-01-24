// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Buttons} from "./Buttons"
import { LuckyPerson } from "./LuckyPerson"
import { UnPickedPeople } from "./UnPickedPeople"
import './App.css'

function App() {

  const people = [
      {
        "id": 1,
        "name": "Brian Murray",
        "picture": "/public/images/Brian.jpeg"
      },
      {
        "id": 2,
        "name": "Daniel Janikowski",
        "picture": "/images/Dan.png"
      },
      {
        "id": 3,
        "name": "Jared Kozar",
        "picture": "/images/Jared.png"
      },
      {
        "id": 4,
        "name": "April Breen",
        "picture": "./public/images/april_and_JCP.png"
      }
    ]

  return (
    <>
      <header>
        <h1>People Picker</h1>
        <div className="duck">
          <img className="duck" src="duck.png" />
        </div>
      </header>
      <main>
        <Buttons />
        <LuckyPerson />
        <UnPickedPeople people={people} />
        {/* <PickedPeople /> */}
        {/* <StashedPeople /> */}
      </main>
      <footer>
        Copywrite 2024 us.com
      </footer>
    </>
  )
}

export default App

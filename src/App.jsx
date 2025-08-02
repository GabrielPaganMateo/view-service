import { useState } from "react"
import Health from "./components/Health"
import Login from "./components/Login";

function App() {
  const [health, setHealth] = useState();

  return (
    <>
      {health === undefined || health === false ? 
        <Health health={{'setHealth' : setHealth}}/>
        :
        <Login/>
      }
    </>
  )
}

export default App

import { useState } from "react"
import Health from "./components/Health"
import LoginOrRegister from "./components/LoginOrRegister";
import FormSwitch from "./components/FormSwitch";

function App() {
  const [health, setHealth] = useState();

  return (
    <>
      {health === undefined || health === false ? 
        <Health health={{'setHealth' : setHealth}}/>
        :
        <FormSwitch/>
      }
    </>
  )
}

export default App

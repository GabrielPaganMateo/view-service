import { useState } from "react"
import Health from "./components/Health"
import FormSwitch from "./components/FormSwitch";
import AuthProvider from "./providers/AuthProvider";
import './style-sheets/body.css'

function App() {
  const [health, setHealth] = useState();

  return (
    <>
      {health === undefined || health === false ? 
        <Health health={{'setHealth' : setHealth}}/>
        :
        <AuthProvider>
          <FormSwitch setHealth={setHealth}/>
        </AuthProvider>
      }
    </>
  )
}

export default App

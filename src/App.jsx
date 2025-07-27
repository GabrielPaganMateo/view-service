// import { useEffect, useState } from 'react';
// import healthcheck from './utility-functions/healthcheck'

import Health from "./components/Health"

function App() {
  // const [health, setHealth] = useState();
  // const response = healthcheck();
  // useEffect(() => {response.then(data => setHealth(data))})
  return (
    <>
      {/* {health !== undefined ? health.message : "hello"} */}
      <Health/>
    </>
  )
}

export default App

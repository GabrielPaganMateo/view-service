import { useEffect, useState } from "react";
import { createHealthRetry, runHealthCheck } from "../utility-functions/healthcheck";
import '../style-sheets/health.css'

function Health() {
   const [available, setAvailable] = useState();
   useEffect(() => {runHealthCheck(setAvailable)}, [available])
   useEffect(() => {
    const retryInterval = createHealthRetry(setAvailable); 
    return () => clearInterval(retryInterval);
   }, [])

   if (available === undefined) {
    return (
        <>
            <div className="health-container">
                <div id="col">
                    <div id="img-wrap">
                        <span className="initialLoader"></span>
                    </div>
                </div>
            </div>
         </>
    )
   }

   if (available == false) {
    return (
        <>
            {!available && 
            <>
                <div className="health-container">
                    <p>Service unavailable, try again later.</p>
                    <div className="bg">
                        <div className="loader"></div>
                    </div>
                </div>
            </>
            }
        </>
    )
   }

    // return ({available})
}

export default Health;
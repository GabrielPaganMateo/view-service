import { useEffect, useState } from "react";
import { createHealthRetry, runHealthCheck } from "../utility-functions/healthcheck";
import '../style-sheets/health.css'
import InitialLoader from "./InitialLoader";

function Health({health}) {
   const [available, setAvailable] = useState();
   useEffect(() => {runHealthCheck(setAvailable)}, [])
   useEffect(() => {
    const retryInterval = createHealthRetry(setAvailable); 
    return () => clearInterval(retryInterval);
   }, [])
   useEffect(() => {
    health.setHealth(available);
   }, [available, health])

   if (available === undefined) {
    return (
        <>
            <div className="health-container">
                <InitialLoader/>
            </div>
         </>
    )
   }

   if (available === false) {
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

   if (available === true) {
    return (
        <>
        </>
    )
   }
}

export default Health;
import ErrorCode from "../enumerators/ErrorCode";
import ResponseCode from "../enumerators/ResponseCode";


async function healthcheck() {
    try {
        return await (await fetch("https://localhost:8080/health")).json();
    } catch (error) {
        console.log(error);
        return new Error((new ErrorCode()).UNAVAILABLE);
    }
    
}

function runHealthCheck(setAvailable) {
    healthcheck().then(response => {
        console.log(response.message)
        if (response.code === (new ResponseCode()).SERVICE_OK) {
            setAvailable(true)
        } else {
            setAvailable(false)
        }
    })
}

function createHealthRetry(setAvailable) {
    return setInterval(() => {
            console.log("Attempting connection...")
            runHealthCheck(setAvailable)
        }, 5000);
}

export { healthcheck, runHealthCheck, createHealthRetry };
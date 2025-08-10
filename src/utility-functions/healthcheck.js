import ErrorMessage from "../constants/ErrorMessage";
import ResponseCode from "../constants/ResponseCode";


async function healthcheck() {
    try {
        return await (await fetch("https://localhost:8080/health")).json();
    } catch (error) {
        console.log(error);
        return new Error(ErrorMessage.UNAVAILABLE);
    }
    
}

function runHealthCheck(setAvailable) {
    healthcheck().then(response => {
        console.log(response.message)
        if (response.code === ResponseCode.SERVICE_OK) {
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
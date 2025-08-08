import { useEffect, useState } from "react";
import {registerEmail, handleRegistration} from "../utility-functions/registration";
import ResponseCode from "../enumerators/ResponseCode";
import '../style-sheets/register.css';

function Register({setForm}) {
    const [response, setResponse] = useState();
    useEffect(() => {handleRegistration(response)}, [response])
    const code = new ResponseCode();
    function handleRegisterSubmit(event) {
        event.preventDefault();
        registerEmail(setResponse, event.target.email.value);
    }

    if (response !== undefined && response === code.RESGITER_OK) {
        return (
            <><h1>Confirmation Code time</h1></>
        )
    }


    return (
        <>
            <form method="post" onSubmit={(event) => handleRegisterSubmit(event)}>
                <div className="email-label">
                    <div>Email:&nbsp;</div>
                    {response !== undefined ? <div className="error-div">{response}</div> : '' }
                </div>
                <div className="email-input">
                    <input type="text" name="email" placeholder="user@email.com"></input><br/><br/>
                    <input type="submit" value="Register"></input>
                </div>
            </form>
            <a onClick={() => {setForm('Login')}}><p className="loginregister-link">Already have an account ? Click here to Sign in</p></a>
        </>
    )
}

export default Register;
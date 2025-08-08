import { useState } from "react";
import Register from "./Register";
import '../style-sheets/loginOrRegister.css';

function LoginOrRegister() {
    const [form, setForm] = useState('Register');


    if (form === 'Login') {
        return (
            <>
                <div className="loginregister-container">
                    <form>
                        <label>Email:</label><br/>
                        <input></input><br/><br/>
                        <label>Password:</label><br/>
                        <input></input>
                    </form>
                    <br/>
                    <a onClick={() => {setForm('Register')}}><p className="loginregister-link">Don't have an account ? Click here to Create account</p></a>
                </div>
            </>
        )
    } else if (form === 'Register') {
        return (
            <>
                <div className="loginregister-container">
                    <Register setForm={setForm}/>
                </div>
            </>
        )
    }
}

export default LoginOrRegister;
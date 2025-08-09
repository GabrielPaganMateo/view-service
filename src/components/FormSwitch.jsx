import { useState } from "react";
import Form from "./Form";
import FormType from "../constants/FormType";


function FormSwitch() {
    const [form, setForm] = useState('REGISTER')

    switch (form) {

        case FormType.REGISTER:

            return (
                <>
                    <Form form={form} setForm={setForm}/>
                    <a onClick={() => {setForm(FormType.LOGIN)}}><p className="loginregister-link">Already have an account ? Click here to Sign in</p></a>
                </>
            );

        case FormType.VERIFY:

            return (
                <></>
            );

        case FormType.CONFIRM:

            return (
                <></>
            );
        
        case FormType.LOGIN:

            return (
                <></>
            );
    }
}

export default FormSwitch;
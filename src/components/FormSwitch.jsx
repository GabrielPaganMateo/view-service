import { useState } from "react";
import Form from "./Form";
import FormType from "../enumerators/FormType";


function FormSwitch() {
    const [form, setForm] = useState('REGISTER')
    const formType = new FormType();

    switch (form) {

        case formType.REGISTER:

            return (
                <>
                    <Form form={form} setForm={setForm}/>
                    <a onClick={() => {setForm(formType.LOGIN)}}><p className="loginregister-link">Already have an account ? Click here to Sign in</p></a>
                </>
            );

        case formType.VERIFY:

            return (
                <></>
            );

        case formType.CONFIRM:

            return (
                <></>
            );
        
        case formType.LOGIN:

            return (
                <></>
            );
    }
}

export default FormSwitch;
import { useEffect, useState } from "react";
import Form from "./Form";
import FormType from "../constants/FormType";
import handleFormResponse from "../utility-functions/handleFormResponse";
import ResponseMessage from "./ResponseMessage";
import '../style-sheets/form.css'


function FormSwitch() {
    const [form, setForm] = useState('REGISTER')
    const [response, setResponse] = useState();
    useEffect(() => handleFormResponse(response, form, setForm), // eslint-disable-next-line react-hooks/exhaustive-deps
        [response]
    );

    switch (form) {

        case FormType.REGISTER:

            return (
                <>
                    <div className="formswitch-container">
                        <ResponseMessage response={response}/>
                        <Form form={form} setForm={setForm} setResponse={setResponse}/>
                        <div className="loginregister-link">
                            <a onClick={() => {setForm(FormType.LOGIN)}}>Already have an account ? Click here to Sign in</a>
                        </div>
                    </div>
                </>
            );

        case FormType.VERIFY:

            return (
                <>
                    <ResponseMessage response={response}/>
                    <Form form={form} setForm={setForm} setResponse={setResponse}/>
                </>
            );

        case FormType.CONFIRM:

            return (
                <>
                    <ResponseMessage response={response}/>
                    <Form form={form} setForm={setForm} setResponse={setResponse}/>
                </>
            );
        
        case FormType.LOGIN:

            return (
                <></>
            );
    }
}

export default FormSwitch;
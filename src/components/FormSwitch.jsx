import { useEffect, useState } from "react";
import Form from "./Form";
import FormType from "../constants/FormType";
import handleFormResponse from "../utility-functions/handleFormResponse";
import ResponseMessage from "./ResponseMessage";
import '../style-sheets/form.css'


function FormSwitch({setHealth}) {
    const [form, setForm] = useState('REGISTER')
    const [response, setResponse] = useState();
    useEffect(() => handleFormResponse(response, form, setForm, setHealth), // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            <a onClick={() => {setForm(FormType.LOGIN)}}>Already have an account ? Click here to Log in</a>
                        </div>
                    </div>
                </>
            );

        case FormType.VERIFY:

            return (
                <>
                    <div className="formswitch-container">
                        <ResponseMessage response={response}/>
                        <Form form={form} setForm={setForm} setResponse={setResponse}/>
                        <div>&nbsp;</div>
                    </div>
                </>
            );

        case FormType.CONFIRM:

            return (
                <>
                    <div className="formswitch-container">
                        <ResponseMessage response={response}/>
                        <Form form={form} setForm={setForm} setResponse={setResponse}/>
                        <div>&nbsp;</div>
                    </div>
                </>
            );
        
        case FormType.LOGIN:

            return (
                <>
                    <div className="formswitch-container">
                        <ResponseMessage response={response}/>
                        <Form form={form} setForm={setForm} setResponse={setResponse}/>
                        <div className="loginregister-link">
                            <a onClick={() => {setForm(FormType.REGISTER)}}>Don't have an account ? Click here to Register</a>
                        </div>
                    </div>
                </>
            );
    }
}

export default FormSwitch;
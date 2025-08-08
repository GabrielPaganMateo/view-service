import { useState } from "react";
import handleFormSubmit from "../utility-functions/handleFormSubmit";
import InputSwitch from "./InputSwitch";

function Form({form, setForm}) {
    const [response, setResponse] = useState();
    console.log(response);

    return (
        <>
            <div className="form-container">
                <form method="post" onSubmit={(event) => handleFormSubmit(form, setForm, setResponse, event)}>
                    <InputSwitch form={form}/>
                </form>
            </div>
        </>
    );
}

export default Form;
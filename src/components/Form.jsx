import { useContext, useEffect, useState } from "react";
import handleFormSubmit from "../utility-functions/handleFormSubmit";
import InputSwitch from "./InputSwitch";
import AuthContext from "../providers/AuthContext";
import handleFormResponse from "../utility-functions/handleFormResponse";

function Form({form, setForm}) {
    const [response, setResponse] = useState();
    const auth = useContext(AuthContext);
    useEffect(() => handleFormResponse(setForm, response), // eslint-disable-next-line react-hooks/exhaustive-deps
        [response]
    );
    console.log(form)
    console.log(response);
    console.log(auth.token);

    return (
        <>
            <div className="form-container">
                <form method="post" onSubmit={(event) => handleFormSubmit(form, setResponse, event, auth)}>
                    <InputSwitch form={form}/>
                </form>
            </div>
        </>
    );
}

export default Form;
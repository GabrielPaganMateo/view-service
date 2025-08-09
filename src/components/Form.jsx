import { useContext, useState } from "react";
import handleFormSubmit from "../utility-functions/handleFormSubmit";
import InputSwitch from "./InputSwitch";
import AuthContext from "../providers/AuthContext";

function Form({form, setForm}) {
    const [response, setResponse] = useState();
    const auth = useContext(AuthContext);
    console.log(response);
    console.log(auth.token);

    return (
        <>
            <div className="form-container">
                <form method="post" onSubmit={(event) => handleFormSubmit(form, setForm, setResponse, event, auth)}>
                    <InputSwitch form={form}/>
                </form>
            </div>
        </>
    );
}

export default Form;
import { useContext, useState } from "react";
import handleFormSubmit from "../utility-functions/handleFormSubmit";
import InputSwitch from "./InputSwitch";
import AuthContext from "../providers/AuthContext";

function Form({form, setResponse}) {
    const auth = useContext(AuthContext);
    const [values, setValues] = useState({emailRegister : '', code : '', passwordConfirm1 : '', passwordConfirm2 : '', emailLogin : '', passwordLogin : ''})

        return (
            <>
                <div className="form-container" name="form-container">
                    <form method="post" onSubmit={(event) => handleFormSubmit(form, setResponse, event, values, auth)}>
                        <InputSwitch form={form} values={values} setValues={setValues}/>
                    </form>
                </div>
            </>
        );
}

export default Form;
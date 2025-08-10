import { useContext } from "react";
import handleFormSubmit from "../utility-functions/handleFormSubmit";
import InputSwitch from "./InputSwitch";
import AuthContext from "../providers/AuthContext";
import InitialLoader from "./InitialLoader";

function Form({form, setResponse}) {
    const auth = useContext(AuthContext);

        return (
            <>
                <div className="form-container" name="form-container">
                    <form method="post" onSubmit={(event) => handleFormSubmit(form, setResponse, event, auth)}>
                        <InputSwitch form={form}/>
                    </form>
                </div>
            </>
        );
}

export default Form;
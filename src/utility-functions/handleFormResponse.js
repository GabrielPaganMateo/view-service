import FormType from "../constants/FormType";
import ResponseCode from "../constants/ResponseCode";


function handleFormResponse(response, form, setForm, setHealth) {
    console.log(response);
    if (response !== undefined) {
        // FAIL REDIRECT
        if (response.code === ResponseCode.INVALID_EMAIL) {
            setForm(FormType.REGISTER);
            return;
        } else if (response.code === ResponseCode.USER_EXISTS) {
            setForm(FormType.LOGIN);
            return;
        } else if (response.code === ResponseCode.USER_UNVERIFIED) {
            setForm(FormType.VERIFY);
            return;
        } else if (response.code === ResponseCode.USER_NOT_FOUND) {
            setForm(FormType.REGISTER);
            return;
        } else if (response.code === ResponseCode.USER_CONFIRMED) {
            setForm(FormType.LOGIN);
            return;
        } else if (response.code === ResponseCode.CONN_REFUSED) {
            setHealth(false);
            return;
        }
        
        // SUCCESS REDIRECT
        if (response.code === ResponseCode.REGISTER_OK) {
            setForm(FormType.VERIFY);
            return;
        } else if (response.code === ResponseCode.VERIFY_OK) {
            setForm(FormType.CONFIRM);
            return;
        } else if (response.code === ResponseCode.CONFIRM_OK) {
            window.location.replace("https://www.example.com");
        } else if (response.code === ResponseCode.LOGIN_OK) {
            window.location.replace("https://www.example.com");
        }
    }
}

export default handleFormResponse;
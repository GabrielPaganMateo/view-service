import ErrorMessage from "../constants/ErrorMessage";
import FormType from "../constants/FormType";
import ApiRequest from "../utility-classes/ApiRequest";
import ApiResponse from "../utility-classes/ApiResponse";
import fetchResponse from "./fetchResponse";
import isSamePasswordInput from "./isSamePasswordInput";

function handleFormSubmit(form, setResponse, event, values, auth) {
    event.preventDefault();
    console.log(values);
    const request = new ApiRequest();
    if (form === FormType.REGISTER) {
        request.setRegisterRequest(values);
        fetchResponse(request, setResponse, auth.setToken);
    } else if (form === FormType.VERIFY) {
        request.setVerifyRequest(values, auth.token);
        fetchResponse(request, setResponse, auth.setToken);
    } else if (form === FormType.CONFIRM) {
        if (isSamePasswordInput(values)) { 
            request.setConfirmRequest(values, auth.token);
            fetchResponse(request, setResponse, auth.setToken);
        } else {
            setResponse(new ApiResponse(null, ErrorMessage.PWD_NO_MATCH, null));
        }
    } else if (form === FormType.LOGIN) {
        request.setLoginRequest(values);
        fetchResponse(request, setResponse, auth.setToken);
    }

}

export default handleFormSubmit;
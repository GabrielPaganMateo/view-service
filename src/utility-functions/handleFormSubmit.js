import FormType from "../constants/FormType";
import ApiRequest from "../utility-classes/ApiRequest";
import fetchResponse from "./fetchResponse";

function handleFormSubmit(form, setResponse, event, auth) {
    event.preventDefault();
    const request = new ApiRequest();
    if (form === FormType.REGISTER) {
        request.setRegisterRequest(event);
        fetchResponse(request, setResponse, auth.setToken);
    } else if (form === FormType.VERIFY) {
        request.setVerifyRequest(event, auth.token);
        fetchResponse(request, setResponse, auth.setToken);
    }

}

export default handleFormSubmit;
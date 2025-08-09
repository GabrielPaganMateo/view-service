import ApiEndpoint from "../enumerators/ApiEndpoint";
import FormType from "../enumerators/FormType";
import InputName from "../enumerators/InputName";
import ApiRequest from "../utility-classes/ApiRequest";
import fetchResponse from "./fetchResponse";

function handleFormSubmit(form, setForm, setResponse, event, auth) {
    event.preventDefault();
    const formType = new FormType();
    const request = new ApiRequest();
    if (form === formType.REGISTER) {
        request.setRegisterRequest(event);
        fetchResponse(request, setResponse, auth.setToken);
    }

}

export default handleFormSubmit;
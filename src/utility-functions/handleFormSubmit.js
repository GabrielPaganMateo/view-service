import FormType from "../enumerators/FormType";
import InputName from "../enumerators/InputName";
import RequestBody from "../utility-classes/RequestBody";
import fetchResponse from "./fetchResponse";

function handleFormSubmit(form, setForm, setResponse, event) {
    event.preventDefault();
    const formType = new FormType();
    const inputName = new InputName();
    const body = new RequestBody();
    let endpoint;
    
    console.log(event.target[inputName.EMAIL].value)
    // create object that will contain the target values...
    // this object will then be passed to a single dynamic fetch call
    if (form === formType.REGISTER) {
        body.email = event.target[inputName.EMAIL].value;
        endpoint = '/register';
        fetchResponse(endpoint, body, setResponse);
    }

}

export default handleFormSubmit;
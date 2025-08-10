import InputName from "../constants/InputName";

function isSamePasswordInput(values) {
    const password = values[InputName.PASSWORD_CONFIRM1];
    const passwordConfirm = values[InputName.PASSWORD_CONFIRM2];
    if (password === passwordConfirm) {
        return true;
    }
    return false;
}

export default isSamePasswordInput;
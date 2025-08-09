
class ApiResponse {

    code;
    message;
    details;

    constructor(code, message, details) {
        this.code = code;
        this.message = message;
        this.details = details;
    }
}

export default ApiResponse;
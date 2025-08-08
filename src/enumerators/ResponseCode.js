
class ResponseCode {

    // SUCCESS
    SERVICE_OK = "AUTH-SUCCESS-00";
    RESGITER_OK = "AUTH-SUCCESS-01";

    // FAIL
    INVALID_EMAIL = "AUTH-FAIL-00";
    USER_EXISTS = "AUTH-FAIL-01";
    USER_UNVERIFIED = "AUTH-FAIL-02";

    constructor() {
    }
}

export default ResponseCode;
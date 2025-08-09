
class ResponseCode {

    // SUCCESS
    static SERVICE_OK = "AUTH-SUCCESS-00";
    static RESGITER_OK = "AUTH-SUCCESS-01";

    // FAIL
    static INVALID_EMAIL = "AUTH-FAIL-00";
    static USER_EXISTS = "AUTH-FAIL-01";
    static USER_UNVERIFIED = "AUTH-FAIL-02";
    
}

export default ResponseCode;
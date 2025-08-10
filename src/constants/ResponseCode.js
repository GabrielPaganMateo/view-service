
class ResponseCode {

    // SUCCESS
    static SERVICE_OK = "AUTH-SUCCESS-00";
    static REGISTER_OK = "AUTH-SUCCESS-01";
    static VERIFY_OK = "AUTH-SUCCESS-02";
    static CONFIRM_OK = "AUTH-SUCCESS-03";
    static LOGIN_OK = "AUTH-SUCCESS-04";

    // FAIL
    static INVALID_EMAIL = "AUTH-FAIL-00";
    static USER_EXISTS = "AUTH-FAIL-01";
    static USER_UNVERIFIED = "AUTH-FAIL-02";
    static USER_NOT_FOUND = "AUTH-FAIL-03";
    static USER_CONFIRMED = "AUTH-FAIL-07";
    static CONN_REFUSED = "VIEW-FAIL-CONN";

}

export default ResponseCode;
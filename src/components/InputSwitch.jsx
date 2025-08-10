import FormType from "../constants/FormType";
import InputName from "../constants/InputName";
import handleValueChange from "../utility-functions/handleValueChange";

function InputSwitch({form, values, setValues}) {

    switch (form) {

        case FormType.REGISTER:

            return (
                <>
                    <div className="form-input">
                        <input type="text" name={InputName.EMAIL_REGISTER} placeholder="user@email.com" value={values.emailRegister} onChange={(event) => handleValueChange(event, values, setValues)}></input><br/><br/>
                        <input type="submit" value="Register"></input>
                    </div>
                </>
            );

        case FormType.VERIFY:

            return (
                <>
                    <div className="form-input">
                        <input type="text" name={InputName.CODE} placeholder="123456" value={values.code} onChange={(event) => handleValueChange(event, values, setValues)}></input><br/><br/>
                        <input type="submit" value="Verify"></input>
                    </div>                
                </>
            );

        case FormType.CONFIRM:

            return (
                <>
                    <div className="form-input">
                        <input type="password" name={InputName.PASSWORD_CONFIRM1} placeholder="password" value={values.passwordConfirm1} onChange={(event) => handleValueChange(event, values, setValues)}></input><br/><br/>
                        <input type="password" name={InputName.PASSWORD_CONFIRM2} placeholder="confirm password" value={values.passwordConfirm2} onChange={(event) => handleValueChange(event, values, setValues)}></input><br/><br/>
                        <input type="submit" value="Confirm"></input>
                    </div>  
                </>
            );
        
        case FormType.LOGIN:

            return (
                <>
                    <div className="form-input">
                        <input type="text" name={InputName.EMAIL_LOGIN} placeholder="user@email.com" value={values.emailLogin} onChange={(event) => handleValueChange(event, values, setValues)}></input><br/><br/>
                        <input type="password" name={InputName.PASSWORD_LOGIN} placeholder="password" value={values.passwordLogin} onChange={(event) => handleValueChange(event, values, setValues)}></input><br/><br/>
                        <input type="submit" value="Login"></input>
                    </div>  
                </>
            );
    }
}

export default InputSwitch;
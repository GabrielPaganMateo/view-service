import FormType from "../constants/FormType";
import InputName from "../constants/InputName";

function InputSwitch({form}) {

    switch (form) {

        case FormType.REGISTER:

            return (
                <>
                    <div className="form-input">
                        <input type="text" name={InputName.EMAIL} placeholder="user@email.com"></input><br/><br/>
                        <input type="submit" value="Register"></input>
                    </div>
                </>
            );

        case FormType.VERIFY:

            return (
                <>
                    <div className="form-input">
                        <input type="text" name={InputName.CODE} placeholder="123456"></input><br/><br/>
                        <input type="submit" value="Verify"></input>
                    </div>                
                </>
            );

        case FormType.CONFIRM:

            return (
                <>
                    <div className="form-input">
                        <input type="password" name={InputName.PASSWORD} placeholder="password"></input><br/><br/>
                        <input type="password" name="pwd-confirmation" placeholder="confirm password"></input><br/><br/>
                        <input type="submit" value="Confirm"></input>
                    </div>  
                </>
            );
        
        case FormType.LOGIN:

            return (
                <></>
            );
    }
}

export default InputSwitch;
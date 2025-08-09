import FormType from "../constants/FormType";
import InputName from "../constants/InputName";

function InputSwitch({form}) {

    switch (form) {

        case FormType.REGISTER:

            return (
                <>
                    <div className="email-input">
                        <input type="text" name={InputName.EMAIL} placeholder="user@email.com"></input><br/><br/>
                        <input type="submit" value="Register"></input>
                    </div>
                </>
            );

        case FormType.VERIFY:

            return (
                <></>
            );

        case FormType.CONFIRM:

            return (
                <></>
            );
        
        case FormType.LOGIN:

            return (
                <></>
            );
    }
}

export default InputSwitch;
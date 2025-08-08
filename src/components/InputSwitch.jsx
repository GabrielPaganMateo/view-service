import FormType from "../enumerators/FormType";
import InputName from "../enumerators/InputName";

function InputSwitch({form}) {
    const formType = new FormType();
    const inputName = new InputName();

    switch (form) {

        case formType.REGISTER:

            return (
                <>
                    <div className="email-input">
                        <input type="text" name={inputName.EMAIL} placeholder="user@email.com"></input><br/><br/>
                        <input type="submit" value="Register"></input>
                    </div>
                </>
            );

        case formType.VERIFY:

            return (
                <></>
            );

        case formType.CONFIRM:

            return (
                <></>
            );
        
        case formType.LOGIN:

            return (
                <></>
            );
    }
}

export default InputSwitch;
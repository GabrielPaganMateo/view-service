import { useState } from "react";
import AuthContext from "./AuthContext";


function AuthProvider({children}) {
    const [token, setToken] = useState();

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
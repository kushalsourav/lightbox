import { createContext, useState, useReducer, useContext } from "react";
import reducer from "./reducer";

let initialState = {
    email : "",
    firstname : "",
    lastname: "",
    password : ""
}

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

      const [login , setLogin] = useState(false);
      const [passVisible, setPassVisible] = useState(false);
      const [valEmail, setValEmail] = useState("success");
      const [valPassword, setValPassword] = useState("success");
      const [valConfPass, setValConfPass] = useState("success");
      const [state, dispatch] = useReducer(reducer , initialState);
    return (
        <AuthContext.Provider value={{login, setLogin, state, dispatch, valEmail, setValEmail, valPassword, setValPassword,valConfPass, setValConfPass,passVisible, setPassVisible}}>
            {children}
        </AuthContext.Provider>
    )
}

export  {AuthProvider , useAuth };

import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Form.css';
import { useAuth } from './Authentication/Auth-Context';
const Signup =  () => {
    const {state, dispatch, setLogin, setPassVisible, passVisible}  =   useAuth();
    let {valEmail, setValEmail, valPassword , setValPassword, valConfPass , setValConfPass} = useAuth();
    const className = "input-icon ";

    const navigate = useNavigate();
    const formHandler = (e) => {
        dispatch({
            type : "HANDLE INPUT",
            name : e.target.id,
            payload : e.target.value
        })
    }
     const signupHandler = async (e) => {
          e.preventDefault();
          const {email , firstname,lastname, password, confirmpassword} = state;
          try {
            const response = await axios.post(`/api/auth/signup`, {
              firstName: firstname,
              lastName: lastname,
              email: email,
              password: password,
              confirmpassword:confirmpassword
            });
            console.log(response)
            localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
            navigate("/");
          } catch (error) {
            console.log(error);
          }
          state.email = "";
          state.password = "";
          state.firstname = "";
          state.lastname = "";  
          state.confirmpassword =  "";
    }


    if(!state.email) { 
        setValEmail= "please enter your email"
        valEmail="error"
     }

     if(!state.password) {
        setValPassword = "please enter your password" 
        valPassword="error"
     }   else if(state.password.length <= 5) {
        setValPassword = "please enter password more than 5 letters" 
        valPassword="error"
    } 
    if(!state.confirmpassword) {
        setValConfPass = "Please confirm your password";
        valConfPass = "error"
    } else if(state.password !== state.confirmpassword) {
        setValConfPass = "Password do not match";
        valConfPass = "error"
        setLogin(false);
    }
    if(state.password === state.confirmpassword) {
        setLogin(true);
        setValConfPass = "Password matches";
    }
    return (
        <>
                <form className="form form-box form-primary container" onSubmit={signupHandler} >
                        <div className={"form-control "+ valEmail }>
                                <label for="email" className="input-label">Email</label>
                                <input type="text"
                                name='email'
                                placeholder="Enter your Email" id="email" 
                                className="input" 
                                value={state.email}
                                onChange={ (e) => formHandler(e)}
                                onBlur={(e) => formHandler(e)}
                                required
                                />
                                <small>{setValEmail}</small>

                        </div>
                        <div  className={"form-control " }>
                                 <label for="firstname"  className="input-label">Firstname</label>
                                 <input type="text"  
                                 placeholder="Enter your First Name" 
                                 name='firstname'
                                 id="firstname" 
                                 className="input" 
                                 value={state.firstname}
                                 onChange={ (e) => formHandler(e)}
                                 required
                                 />
                        </div>
                        <div className="form-control ">
                                 <label for="lastname"  className="input-label">Lastname</label>
                                 <input type="text"  
                                 placeholder="Enter your Last Name" 
                                 name='firstname'
                                 id="lastname" 
                                 className="input" 
                                 value={state.lastname}
                                 onChange={ (e) => formHandler(e)}
                                 required
                                 />
                        </div>
                        <div className={"form-control "+ valPassword }>
                            <label for="password" className="input-label">password</label>
                            <span 
                            className={className + `${passVisible ? "color" : "active"}` }>
                                <i onClick={() => setPassVisible(!passVisible)} class="fas fa-eye-slash"></i></span>
                            <input 
                            type={passVisible ? "text" : "password"}  
                            placeholder="Enter your password" 
                            name='password'
                            id="password" 
                            className="input" 
                            value={state.password}
                            onChange={ (e) => formHandler(e)}
                            required
                            />
                            <small>{setValPassword}</small>
                        </div>
                        <div className={"form-control "+ valConfPass}>
                            <label for="password" className="input-label">confirm password</label>
                            <span
                            className={className + `${passVisible ? "color" : "active"}` }
                            ><i onClick={() => setPassVisible(!passVisible)} class="fas fa-eye-slash"></i></span>
                            <input 
                            type={passVisible ? "text" : "password"}  
                            placeholder="Enter your password" 
                            name='confirmpassword'
                            id="confirmpassword" 
                            className="input" 
                            value={state.confirmpassword}
                            onChange={ (e) => formHandler(e)}
                            required
                            />
                            <small>{setValConfPass}</small>
                        </div>
                        <div className="form-control">
                            <div className="form-info">
                                <label>
                                <input type="checkbox" name="remember" />Remember me
                                </label>
                            </div>
                            <input type="submit" className="btn btn-primary btn-large" 
                            value="Sign up" />
                        </div>
                </form>
        </>
    )
}

export default Signup;
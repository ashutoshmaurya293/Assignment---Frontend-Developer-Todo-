import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { app,} from "../../friebace";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const Navigaate = useNavigate()
  const logIn = () => {
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
signInWithPopup(auth,provider)
.then((result)=>{
    console.log(result);
    Navigaate("/todo")
})
.catch(err=>{
    console.log(err);
})

  };

  return (
    <div>
      <button onClick={logIn}>Login with Google</button>
    </div>
  );
};

export default Login;

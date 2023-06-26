import React, { useState } from "react";
import { auth, googleProvider } from "../config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { doAuth } from "../Features/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { saveUsername } from "../Features/UserSlice";
import icon from '../Assets/upload.png'
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);
  const signin = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res._tokenResponse);
      dispatch(doAuth());
      dispatch(saveUsername(email));
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  const signingoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
      dispatch(doAuth());
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <div className="signupcontainer">
          <div className="signupimgcontainer">
            <img className="signup-img"src="https://img.freepik.com/premium-vector/happy-people-use-mobile-smartphone_165488-4717.jpg?w=1380" alt="misssing"/>
          </div>
          <div className="signupinput">
            <div className="inpdetails">
            <input
              type="email"
              placeholder=" Mail"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder=" Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input style={{display:"none"}}type="file" id="file"/>
            <label htmlFor="file">
                <img style={{height:"30px",width:"30px",cursor:"pointer"}}src={icon} alt="missing"/>
                <span style={{fontSize:"12px",fontWeight:"bold"}}>Add an Avatar</span>
            </label>

            <button onClick={signin}>Sign In</button>
            <button onClick={signingoogle}>Sign in with Google</button>
            <Link to="/login" className="links">Already a Registered User?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

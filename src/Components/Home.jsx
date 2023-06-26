import React from "react";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeAuth } from "../Features/AuthSlice";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.userdetails.Username);
  const logout = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
      dispatch(removeAuth());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="chatContainer">
        <div className="appContainer">
          <div className="appTitle">
            <div class="appname">
              <h1
                style={{ margin: "0px", fontSize: "18px", paddingTop: "30px",paddingLeft:"15px" }}
              >
                WeChat
              </h1>
            </div>
            <div className="logoutbtn">
              <img
                style={{ height: "30px", marginRight: "15px" }}
                src="https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png"
                alt="missing"
              />
              <h4 style={{ margin: "0px", marginTop: "5px" }}>Yash</h4>
              <button
                style={{
                  height: "25px",
                  marginLeft: "15px",
                  marginTop: "4px",
                  fontWeight: "bold",
                  backgroundColor: "rgb(97, 92, 139)",
                  cursor: "pointer",
                  color:"white",
                  border:"none"
                }}
                onClick={logout}
              >
                logout
              </button>
            </div>
          </div>
          <div className="searchIcon">
            <input type="text" placeholder="Find a User" />
          </div>
          <div className="userDisplay">
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-looking-confident_1298-291.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
                <p style={{ margin: "0px" }}>Yash</p>
                <h6 style={{ margin: "0px", fontWeight: "lighter" }}>
                  okay.call me
                </h6>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
                <p style={{ margin: "0px" }}>Tyler</p>
                <h6 style={{ margin: "0px", fontWeight: "lighter" }}>
                  I sent it last night
                </h6>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/afro-man-with-his-arms-crossed_1368-2734.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
                <p style={{ margin: "0px" }}>Sandy</p>
                <h6 style={{ margin: "0px", fontWeight: "lighter" }}>
                  see you tomorrow
                </h6>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
                <p style={{ margin: "0px" }}>Halsey</p>
                <h6 style={{ margin: "0px", fontWeight: "lighter" }}>
                  I'll let you know
                </h6>
              </div>
            </div>
            <div className="user">
              <div className="userimage">
                <img
                  src="https://img.freepik.com/free-photo/handsome-man-isolated-white-background_1368-4280.jpg?size=626&ext=jpg&uid=R106874875&ga=GA1.2.2042889475.1686818793&semt=ais"
                  alt="Avatar"
                  className="Avatar"
                />
              </div>
              <div className="userdetails">
                <p style={{ margin: "0px" }}>Ashley</p>
                <h6 style={{ margin: "0px", fontWeight: "lighter" }}>
                  I'm still waiting
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-container">
         <div className="user-name">
            <h3 style={{fontWeight:"lighter",margin:"0px",color:"white",paddingTop:"25px",fontSize:"22px",paddingLeft:"10px"}}>Tyler</h3>
         </div>
         <div>

         </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./FirebaseAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = () => {
    let obj = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBuxQFXG9Qsgre9qLML7cz6bFpoAj4dNgE",
        obj
      )
      .then(() => {
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
    // console.log(email);
    // console.log(password);
  };
  const signUpHandler = () => {
    let obj = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBuxQFXG9Qsgre9qLML7cz6bFpoAj4dNgE",
        obj
      )
      .then(() => {
        alert(`${email} Registered Successfully`);
        setJustifyActive("tab1");
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  };
  const googleHandler = () => {
    signInWithPopup(auth, provider)
      .then((success) => {
        navigate("/home", { replace: true });
        console.log(success);
      })
      .catch((failure) => {
        console.log(failure);
      });
  };

  return (
    <>
      <div class="p-5 text-center bg-light">
        <h1 class="mb-3">Ashimara Housing Private Limited</h1>
      </div>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div
                className=" justify-content mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "#1266f1" }}
                  onClick={googleHandler}
                >
                  <MDBIcon fab icon="google" size="3x" />
                </MDBBtn>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              onChange={emailHandler}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              onChange={passwordHandler}
            />

            <MDBBtn className="mb-4 w-100" onClick={loginHandler}>
              Sign in
            </MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              onChange={emailHandler}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
              onChange={passwordHandler}
            />

            <MDBBtn className="mb-4 w-100" onClick={signUpHandler}>
              Sign up
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
};
export default Auth;

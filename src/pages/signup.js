import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
 
export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAdress, setEmailAdrress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAdress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAdress, password)
      .then((result) => 
        result.user.updateProfile({
          displayName: firstName,
          photoURL: 1,
        }).then(() => {
          history.push(ROUTES.BROWSE);
        })
      )
      .catch((error) => {
        setFirstName("");
        setEmailAdrress("");
        setPassword("");
        setError(error.message);
      });
  };
	
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title> Sign Up </Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input 
              placeholder="Email address"
              value={emailAdress}
              onChange={({ target }) => setEmailAdrress(target.value)}
            />
            <Form.Input 
              type="password" 
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
						Sign Up
            </Form.Submit>
            <Form.Text>
						Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
						The page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
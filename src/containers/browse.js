import React, { useContext, useEffect, useState } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
//eslint-disable-next-line no-unused-vars
export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};


  useEffect(() => {
    console.log("profile",profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (

    <>
      {loading ? <Loading src={user.photoURL} />
        : <Loading.ReleaseBody />} 

      <Header src="joker1">
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Header.FeatureCallOut>Series</Header.FeatureCallOut>
          <Header.FeatureCallOut>Films</Header.FeatureCallOut>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>
            Watch Joker Now
          </Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  );
}
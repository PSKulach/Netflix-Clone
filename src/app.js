import React from "react";
//eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router } from "react-router-dom";
//eslint-disable-next-line no-unused-vars
import { Home, Browse, Signin, Signup } from "./pages";
//eslint-disable-next-line no-unused-vars
import * as ROUTES from "./constants/routes";
//eslint-disable-next-line no-unused-vars
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
export default function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
    
      <ProtectedRoute 
        user={user} 
        path={ROUTES.BROWSE} 
      >
        <Browse />
      </ProtectedRoute>
    
      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>
    </Router>		
  );
}
  
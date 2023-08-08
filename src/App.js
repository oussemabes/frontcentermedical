import "boosted/dist/css/boosted.css";
import "boosted/dist/js/boosted";

import { Route, Routes } from "react-router-dom";
import Public from './layouts/public';
import Privite from './layouts/privite';
import jwtDecode from "jwt-decode";

import React from "react";
function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userId, setUserId] = React.useState(0);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
      const user = jwtDecode(token);
 

      if (!user) {
        localStorage.removeItem("token");
      } else {
        setUserId(user.id);
        setIsAuthenticated(!isAuthenticated);
      } 
    }
  }, []);
  return (
    <>
    {isAuthenticated ? (
     <Privite />
    ) : (
      <Public />
    )}
  </>
  );
}

export default App;

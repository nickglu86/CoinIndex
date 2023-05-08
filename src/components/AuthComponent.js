import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "react-bootstrap";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function AuthComponent() {
  const [message, setMessage] = useState(token);
  
  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      //Localhost
      // url: "http://localhost:3000/auth-endpoint",
      //Heroku Server
      url: "https://enays-auth-app.herokuapp.com/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        // console.log(result.data)
        // localStorage.setItem("isLoggedIn", "true");
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

// logout
const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // Set LocalSorage isLogged in to False
    localStorage.setItem("isLoggedIn", "false");
    // redirect user to the landing page
    window.location.href = "/";
  }


  return (
    <div className="text-center">
      <h1>Auth Component</h1>

      {/* displaying our message from our API call */}
      <h3 className="text-danger">{message}</h3>

      {/* logout */}
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}

import React, { useEffect } from "react";
import axios from "axios";

function HomePage() {
  useEffect(() => {
    console.log("component did mount");
    axios
      .get("http://localhost:4000/auth/login/success", {
        withCredentials: true,
      })
      .then((response) => {
        console.log("response");
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <h1>Home page 2</h1>;
}

export default HomePage;

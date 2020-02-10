import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export { About };

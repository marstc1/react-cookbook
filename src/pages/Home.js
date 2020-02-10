import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { value, setValue } = useContext(UserContext);

  return (
    <>
      <div>Hello from Home and {value}</div>;
    </>
  );
};

export { Home };

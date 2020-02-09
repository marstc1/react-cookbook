import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const About = () => {
  const msg = useContext(UserContext);

  return <div>Hello {msg} from About</div>;
};

export { About };

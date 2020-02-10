import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const About = () => {
  const { value, setValue } = useContext(UserContext);

  return (
    <>
      <div>Hello {value} from About</div>
      <button onClick={() => setValue("HEy")}>Change Value</button>
    </>
  );
};

export { About };

import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { login } from "../utils/Login";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div>
        <h2>Home</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user ? (
          <button
            onClick={async () => {
              setUser(null);
            }}>
            Log out
          </button>
        ) : (
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}>
            Login
          </button>
        )}
      </div>
    </>
  );
};

export { Home };

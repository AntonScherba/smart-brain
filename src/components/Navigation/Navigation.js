import React from "react";
import "../../tailwind.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="text-2xl p-4 link  underline cursor-pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="text-2xl p-4 transition duration-500 ease-in hover:opacity-50 underline cursor-pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="text-2xl link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;

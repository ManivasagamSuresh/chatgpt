import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function Navbar() {
  return (
    <div className="navbarContainer">
      <Link to={"/"} className="navbarContainer_logo">
        <img src="/media/logo.png" />
        <span>MB_AI</span>
      </Link>
      <div className="navbarContainer_user">
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>

    </div>
  );
}

export default Navbar;

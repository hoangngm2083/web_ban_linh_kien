import React from "react";
import { useSelector } from "react-redux";
import { isLogged, selectUserId } from "../../../redux/slices/userSlice";

const Header = () => {
  const userId = useSelector(selectUserId);
  const loggedIn = useSelector(isLogged);
  return (
    <>
      <h1>Header</h1>
      {loggedIn ? (
        <div>
          <h2>Welcome, User {userId}</h2>
        </div>
      ) : (
        <h2>Please log in to view your profile</h2>
      )}
    </>
  );
};

export default Header;

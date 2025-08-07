//name argument.
import { useEffect, useState } from "react";

// useEffect(() => {
//   // API CALLS
// }, []);

const User = ({ name }) => {
  return (
    <div className="user-card">
      <h2>Name:- {name}</h2>
      <h3>Location:- Bengaluru</h3>
      <h3>Contact:- paruchurichaitanyakrishna6@gmail.com</h3>
    </div>
  );
};

export default User;

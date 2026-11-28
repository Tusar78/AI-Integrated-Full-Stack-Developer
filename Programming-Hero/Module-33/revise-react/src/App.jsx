import { useState } from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

const App = () => {
  const [user, setUser] = useState({
    name: "Tusar",
    role: "Web Developer",
    isOnline: true,
  });


  const handleRoleChange = () => {
    setUser({
      ...user,
      role: 'Full Stack Developer'
    })
  }

  const handleToggle = () => {
    setUser({
      ...user,
      isOnline: !user.isOnline
    })
  }

  return (
    <>
      <div>
        <h2>Name: {user.name}</h2>
        <p>Role: {user.role}</p>
        {user.isOnline ? <p>Available</p> : <p>Not Available</p> }
        <button onClick={handleRoleChange}>Role Change</button>
        <br/>
        <button onClick={handleToggle}>
          {user.isOnline ? "Go Offline" : "Go Online"}
        </button>
      </div>
    </>
  );
};

export default App;

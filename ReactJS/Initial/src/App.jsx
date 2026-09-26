import { useState } from 'react';
import './App.css'

const App = () => {
  const [user, setUser] = useState({
    name: 'Tusar',
    profile: {
      role: 'Developer',
      experience: 4, 
    }
  })

  const handleRole = () => {
    setUser(prevUser => ({
      ...prevUser,
      profile: {
        ...prevUser.profile,
        role: 'Full Stack Developer'
      }
    }))
  }

  return (
    <>
      <h1>My Name: {user.name}</h1>
      <h2>My Role: {user.profile.role}</h2>
      <h2>My Role: {user.profile.experience}</h2>
      <p>{user.isOnline ? "Online" : "Offline"}</p>

      <button onClick={handleRole}>Change Role</button>
    </>
  )
}

export default App;
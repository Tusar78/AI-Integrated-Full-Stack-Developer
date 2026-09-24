import { useState } from "react";
import "./App.css";

const Hero = () => {
  return (
    <section className="hero-wrap">
      <h1>Expert Profiles</h1>
      <p>Learn React by building real applications.</p>
    </section>
  );
};

const ProfileCard = ({ data }) => {
  const [isHired, setIsHired] = useState(false);
  const [like, setLike] = useState(false);

  const {
    name,
    role,
    experiences,
    isAvailableForHire,
  } = data;

  const handleHire = () => {
    setIsHired(true);
  };

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <div className="profile-card">
      <div className="profile-image"></div>

      <h2 className="profile-name">{name}</h2>

      <p className="profile-role">{role}</p>

      <p className="profile-experience">{experiences}</p>

      {isAvailableForHire ? (
        <button onClick={handleHire}>
          {isHired ? "Hired" : "Hire"}
        </button>
      ) : (
        <button disabled>Not Available</button>
      )}

      <button onClick={handleLike}>{like ? '♥ Liked' : '♡ Like'}</button>

    </div>
  );
};

const App = () => {
  const profilesData = [
    {
      id: 1,
      name: "Tusar Ali",
      role: "Frontend Webflow Developer",
      experiences: "4 Years",
      isAvailableForHire: false,
    },
    {
      id: 2,
      name: "Jannatul Mawa Jannat",
      role: "UI/UX Designer",
      experiences: "2 Years",
      isAvailableForHire: true,
    },
    {
      id: 3,
      name: "Aopo Roy",
      role: "Backend Engineer",
      experiences: "3 Years",
      isAvailableForHire: false,
    },
    {
      id: 4,
      name: "Salman Mahmud",
      role: "Full-Stack Developer",
      experiences: "1 Year",
      isAvailableForHire: true,
    },
    {
      id: 5,
      name: "Tania Sultana Asha",
      role: "Project Manager",
      experiences: "5 Years",
      isAvailableForHire: false,
    },
    {
      id: 6,
      name: "Tafhim",
      role: "QA Tester",
      experiences: "2 Years",
      isAvailableForHire: true,
    },
  ];

  return (
    <>
      <Hero />
      <div className="card-list">
        {profilesData.map((data) => (
          <ProfileCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default App;
